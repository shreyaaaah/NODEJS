//router
import express from "express"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"
const app = express()
app.listen(8083,()=>console.log("Server started"))
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
