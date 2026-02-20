import express from 'express'
const app = express()
app.listen(8082,()=>{
    console.log("Server Started")
});
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("response from server for /")
})