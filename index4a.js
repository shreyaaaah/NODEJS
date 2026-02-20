import express from 'express'
const app=express()
app.listen(8082,()=>console.log("Server Started"));
app.get("/:id1/:id2/",(req,res)=>{
    console.log(req.params)
    res.send(Number(req.params.id1)+Number(req.params.id2))
});
app.get("/x/:x/y/:y/z/:z/",(req,res)=>{
    console.log(req.params)
    res.send(Number(req.params.x)+Number(req.params.y)+Number(req.params.z))
});
app.get("/:a/:b/:c/:d/",(req,res)=>{
    console.log(req.params)
    res.send("Hello Students")
});