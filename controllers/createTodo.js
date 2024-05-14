const Todo = require ("../models/Todo");

exports.createTodo = async(req,res) => {
    try{
         const {title, description} = req.body;
         const response = await Todo.create({title, description})
         res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created Succcessfully"
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