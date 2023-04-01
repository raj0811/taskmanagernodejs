const Task = require("../models/task")

module.exports.create = function(req, res) {
  Task.create({
    title: req.body.title,
    description: req.body.task_details,
    user: req.user._id
  })
  .then(tasks => {
    req.flash('sucess','Added'); 
    return res.redirect('back');
  })
  .catch(err => {
    console.log(err);
  });
};


  module.exports.update = function(req, res) {
    const id = req.params.id;
    const update = {
      title: req.body.newtitle, // set the value of the title property
      description:req.body.new_task_details
    };
  
    Task.findByIdAndUpdate(id, update, { new: true })
      .then(updatedTask => {
        console.log(updatedTask);
        return res.redirect('back');
      })
      .catch(err => {
        console.error(err);
        return res.status(500).send(err);
      });
  };
  

  module.exports.destroy = function(req, res) {
    Task.findById(req.params.id)
      .then((task) => {
        if (!task) {
          return res.status(404).send('Task not found');
        }
        return task.deleteOne();
      })
      .then(() => {
        req.flash('error','Deleted'); 
        return res.redirect('back');
      })
      .catch((err) => {
        // Handle any errors here
        console.error(err);
        return res.status(500).send(err.message);
      });
  };
  
  
