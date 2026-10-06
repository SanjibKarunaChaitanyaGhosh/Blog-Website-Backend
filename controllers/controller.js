// businness logic
import Todo from "../models.js/todo.js"

export const hello = (req, res) => {
    res.status(200).json(
        {
            message: "welcome .............."
        }
    )
}

export const greet = (req, res) => {
    res.json(
        {
            message: "Welcome to this website...."
        }
    )
}

export const retrive =async (req, res) => {
    try {

    const todos = await Todo.find().populate("createdBy","role")
    res.status(200).json({message:"todos..\n",todos})

    } catch (error) {
        console.log(error)
        res.status(500).json({error : error.message})
    }
}

// Data saving within DB
export const send =async (req, res) => {
    try {
        const { title, description } = req.body

        const todo = await Todo.create({title, description,createdBy:req.user.id})

        console.log("sending...",todo)
    
        res.status(201).json(
            {
                message: "Todo created.....",
                Todo : todo 
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
}

export const update =async (req, res) => {
    try {
    const {id} = req.params;   
    const {title,description}=req.body;


    // If ID does not exist in database
    if (!newTodo) {
        return res.status(404).json({
            message: `Todo ID :${id} is not present in the database`
        });
    }
    
    const newTodo = await Todo.findByIdAndUpdate(
        id,
        {title,description},
        {new:true}
    )
    res.status(200).json({message:"Todo updated successFully.....",newTodo})

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export const remove =async (req, res) => {
    try {
    const {id}=req.params;

    const delTodo = await Todo.findByIdAndDelete(id)

        // If ID does not exist in database
        if (!delTodo) {
            return res.status(404).json({
                message: `Todo ID :${id} is not present in the database`
            });
        }

        // If Todo was successfully deleted
        res.status(200).json({
            message: "Todo deleted successfully",
            Todo: delTodo
        });

    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}
