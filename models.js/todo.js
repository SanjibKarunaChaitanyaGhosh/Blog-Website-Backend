import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            minLength:3
        },
        description:{
            type:String,
            required:true,
            minLength:3
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
    },
    {
        timestamps:true
    }
);

const Todo = mongoose.model("todo",todoSchema);

export default Todo;