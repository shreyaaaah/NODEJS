import express from 'express'
const app = express();
app.listen(8082);
const logger = (req,res,next) => {
    req.message = " This is logger function"
    //console.log(req.url)
    next()
    
};
//app.use(logger);
app.get("/home",logger,(req,res)=>{
    //app.use(logger)
    //res.end()
   // res.send("Hello World")
  // res.json({name:"Shreya",age:21})
  console.log(req.url)
  console.log(req.message)
  res.json(req.url);


});