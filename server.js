import express from 'express'
import dotenv from 'dotenv'
import router from './routes/route.js'
import { hello } from './controllers/controller.js'
import auth from './middleware/auth.js'
import connectDb from './database/db.js'
import userRoutes from './routes/user.js'


dotenv.config()

const app = express()
const port = process.env.PORT

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

//parsing
app.use(express.json())

//home Routing
app.get('/', hello)

//Routing
app.use("/api", router)
app.use("/api",userRoutes)

try {
  await connectDb();
} catch (error) {
  console.error("Application cannot start:", error.message);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })