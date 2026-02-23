import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()
const SECRET = "lpu"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBlbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDAyNCwiZXhwIjoxNzcxODM3NjI0fQ.B91cHGS7URKCFuxzodKP9ft34646vzMenJimQ4qs-a8"
const user = jwt.verify(token,SECRET)
console.log(user)