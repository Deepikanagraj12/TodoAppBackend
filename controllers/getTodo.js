
const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try{
           const todo = await Todo.find({});
           res.status(200).json(
            {
                success:true,
                data:todo,
                message:"Entire Todo Data is Fetched"
            }
           )
    }
    catch(error){
        console.error(error),
        console.log(error),
        res.status(500).json({
            success:false,
            error:error.meassage,
            meassage:"Server Error"
        })

    }
}

exports.getTodoById = async (req, res) => {
    try{
           const id = req.params.id;
           const todo = await Todo.findById({ _id: id});

           if(!todo){
               return res.status(404).json({
                success:false,
                message:"no data found",
               })
           }
           res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Todo ${id} Data is Fetched`
            }
           )
    }
    catch(error){
        console.error(error),
        console.log(error),
        res.status(500).json({
            success:false,
            error:error.meassage,
            meassage:"Server Error"
        })

    }
}
