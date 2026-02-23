//router
import express from 'express'
const app = express()
app.listen(8083,()=>console.log("Server Started"))
const userRouter = express.Router()
const productRouter = express.Router()

userRouter.get("/",(req,res)=>{
    res.send("This is a get req from user router")
})
userRouter.post("/",(req,res)=>{
    res.send("This is a post request of user router")
})
productRouter.get("/",(req,res)=>{
    res.send("This is a get req from product router")
})
productRouter.post("/",(req,res)=>{
    res.send("This is a post request of product router")
})


app.use("/api/users",userRouter)
app.use("/api/product",productRouter)