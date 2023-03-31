const mongoose =require('mongoose');

const taskSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
    },
    {
        timestamps: true
    
});

const Task=mongoose.model('Task',taskSchema);
module.exports=Task;