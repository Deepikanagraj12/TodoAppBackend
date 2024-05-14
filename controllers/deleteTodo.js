const Todo = require ("../models/Todo");

exports.deleteTodo = async(req,res) => {
    try{
         const {id} = req.params;
         const todo = await Todo.findByIdAndDelete(id)

            res.status(200).json(
            {
                success:true,
                data:todo,
                message:"deleted Succcessfully"
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