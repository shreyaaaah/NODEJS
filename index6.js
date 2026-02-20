import express from 'express'
const app= express()
app.listen(8082)
app.get("/",(req,res)=>{
    res.send("Hello " +req.query.name + req.query.age);
})
