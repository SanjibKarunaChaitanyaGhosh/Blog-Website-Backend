import jwt from 'jsonwebtoken'


const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1]

        //jwt verification
        const user = jwt.verify(token,process.env.Jwt_SECRET_KEY)
        
        
        // Store verified user information inside the current request
        req.user = user 

        // jwt.verify() tells us WHO the request belongs to, and 
        // req.user = user carries that verified identity from the authentication middleware to the next controller.

        next()
        
    } catch (error) {
        res.status(401).json({
            error : "Invalid Token..."
        })
    }
}


export default auth

    // if (req.headers.authorization===process.env.SECRET_KEY) {
    //     next()
    // } else {
    //     res.status(401).json(
    //         {
    //             error: "Unauthorized access Not Allowed..."
    //         }
    //     )
    // }
