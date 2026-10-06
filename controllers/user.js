import User from "../models.js/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp =async (req,res)=>{
    try {
        const {username,email,password} = req.body
        
        //Password hasing
        const hashPassword = await bcrypt.hash(password,10)

        const userSignup =await User.create({username,email,password:hashPassword})
        console.log("signup.......",userSignup)
        res.status(201).json("Signup Successfully.....",userSignup)

    } catch (error) {
        res.status(500).send({
            error : error.message
        })
    }
}

export const login =async (req,res)=>{

    try {
    const {email,password} = req.body;

    const userEmail =await User.findOne({email})

    // email and passeord is matched or not
    // if(!userEmail || userEmail.password!=password){
    //     return res.status(401).json({message:`Email or password id not matched....`})
    // }

    if(!userEmail ||!(await bcrypt.compare(password,userEmail.password))){
        return res.status(401).json({message:`Email or password id not matched....`})
    }

    //jwt 
    const webToken = jwt.sign(
        {id:userEmail._id,role:userEmail.role},
        process.env.Jwt_SECRET_KEY,
        { expiresIn: "1h" }
    )

    console.log("login.......")
    res.status(201).json({
        message : "Login successfully..........",webToken
    })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}