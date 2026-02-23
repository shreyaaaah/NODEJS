import express from 'express'
import jwt from 'jsonwebtoken'
const SECRET = "lpu"
const app = express()
app.listen(8083)
const user = {
    name:"John",
    email:"john@email.com",
    role:"student"
}

const token = jwt.sign(user,SECRET,{expiresIn:"1hr"})
console.log(token)
