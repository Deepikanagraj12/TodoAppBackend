const Todo = require ("../models/Todo");

exports.updateTodo = async(req,res) => {
    try{
         const {id} = req.params;
         const {title, description} = req.body;
         const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()})

            res.status(200).json(
            {
                success:true,
                data:todo,
                message:"updated Succcessfully"
            }
         )
    }
    catch(error){
       console.log(error);
       console.log(error);
       res.status(500).json(
        {
        success:false,
        data:"internal error",
        message:error.message,
       }
      )
    }
}