# Backend Revision

* npm init
* npm i express
* npm i dotenv

## Rotes

* app.use("/api",router)

## Controllers

* business logic

## nodemon

* npm install --save-dev nodemon
* npm i nodemon
* nodemon index.js
* npm start

## middleware

* autherization 

## Data Parsing

* app.use(express.json())

## Status Code

```bash
| Status | Meaning      | Example                      |
| ------ | ------------ | ---------------------------- |
|  200   | OK           | Data fetched/updated         |
|  201   | Created      | New user/product created     |
|  400   | Bad Request  | Invalid input                |
|  401   | Unauthorized | Login/token required         |
|  403   | Forbidden    | User doesn't have permission |
|  404   | Not Found    | User doesn't exist           |
|  500   | Server Error | Unexpected backend error     |

```

## mongoose
```bash
npm i mongoose
```

## Database Connection and App listening
```bash
Start application
      ↓
connectDb()
      ↓
MongoDB connected?
   ↙        ↘
 YES         NO
  ↓           ↓
app.listen   catch
  ↓           ↓
Server       Don't start
starts       server
```

# Routes
## Blog Crud Operations
```bash
http://localhost:3000/api/greet
```
```bash
http://localhost:3000/api/fetch
```
```bash
http://localhost:3000/api/send
```
```bash
http://localhost:3000/api/update/:id
```
```bash
http://localhost:3000/api/delete/:id
```

## Signup 

```bash
http://localhost:3000/api/user/signup
```
```bash
http://localhost:3000/api/user/login
```

## Controller User.js and models user.js done

# bcrype 
```bash
npm i bcrypt
```

# jwt

```bash
npm i jsonwebtoken
```

## creating Secret key in terminal
```bash
openssl rand -base64 32
```

## for stronger key
```bash
openssl rand -base64 64
```

## now for authentication  system we should pass toekn for auth

```bash
Client
   |
   | Authorization: Bearer JWT
   ↓
auth middleware
   |
   | jwt.verify()
   ↓
JWT payload
   |
   | req.user = user
   ↓
next()
   |
   ↓
Controller

```

```bash
MongoDB User
     ↓
userEmail._id
     ↓
jwt.sign({ id: userEmail._id })
     ↓
JWT Token
     ↓
Client stores token
     ↓
Client sends token
     ↓
jwt.verify(token, secret)
     ↓
user = { id: ... }
     ↓
req.user = user
     ↓
req.user.id
     ↓
Todo.find({ createdBy: req.user.id })

```

# Only Role based authentication is left