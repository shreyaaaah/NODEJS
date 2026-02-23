import express from 'express'
const app = express()
app.listen(8083,()=>console.log("Server Started"))
//app.use(express.static("images"))
//app.use("/images",express.static("images"))
app.use("/public/img",express.static("public"))
