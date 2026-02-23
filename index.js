import express from "express"
import userRouter from "./routes/userRoutes.js"
import productRouter from "./routes/productRoutes.js"

const app = express()

app.use(express.json())

// routes
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)

app.listen(8083, () => {
    console.log("Server Started on port 8083")
})