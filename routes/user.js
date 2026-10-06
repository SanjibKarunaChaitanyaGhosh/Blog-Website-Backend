import express from 'express'
import { login, signUp } from '../controllers/user.js'

const userRoutes = express.Router()

userRoutes.post("/user/signup",signUp)
userRoutes.post("/user/login",login)

export default userRoutes