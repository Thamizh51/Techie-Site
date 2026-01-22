import express from 'express'
import cors from 'cors'
import { authMiddleware } from './Middlewares/authMiddleWares.js'

const allowedOrigins = "http://127.0.0.1:5500/"
const app = express()

app.use(cors(allowedOrigins))
app.use(express.json())

const users = [
    {username:"thamizh",password:123},
    {username:"thamizh1",password:1234},
    {username:"thamizh2",password:12345},
]
app.get('',(req,res)=>{
    res.status(200).send("Request Recieved")
})

app.post('/login',authMiddleware,(req,res)=>{
    const {email,password} = req.body
    const user = users.find(user => user.username == email && user.password == password)
    if(user){
       return res.status(200).json({
        msg: "login Succesfull",
        success : true
       })
    }
})

app.post('/signup',(req,res)=>{
    const {username,password} = req.body
    users.push({username,password})
    res.status(201).send("User Created")
})
app.get('/api/users',(req,res)=>{
    res.status(200).send(users)
})

app.listen(3000,()=>{
    console.log("Server Listeninggg....")
})