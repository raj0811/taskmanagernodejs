const Task = require('../models/task')
const User= require('../models/user')

module.exports.home= async function(req,res){
   
    try{
       let tasks = await Task.find({}).populate('user').exec();
       
       let users = await User.find({});
      
        return res.render('home',{
            title: 'Task Manager',
            tasks:tasks
            
            
        });
    }catch (error) {
        console.log('Error rendering home page:', error);
        return res.redirect('back');
      }

    

}


module.exports.home8 = function(req, res) {
    Task.find({}).populate('user')
      .then((tasks) => {
        console.log('Tasks:', tasks);
        return res.render('home', {
          title: 'Task Manager',
          tasks: tasks
        });
      })
      .catch((err) => {
        console.log('Error:', err);
        return res.redirect('back');
      });
  };
  
  