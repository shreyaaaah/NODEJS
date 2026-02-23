import express from "express";

const app = express();

app.use(express.json());


// const jwt = Math.round(Math.random()*100000).toString()

// const auth = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//         return res.send("No token provided");
//     }

//     const val = authHeader.split(" "); 

//     if (val[1] === jwt) {
//         next();
//     } else {
//         res.send("Access Denied");
//     }
// };

app.post("/login", (req, res) => {
    if(req.body.email==="john@gmail.com" && req.body.password==="1234"){
        next();
    }else{
        res.send("Access Denied")
    }
    
    res.send(jwt);
});


// app.get("/", auth, (req, res) => {
//     res.send("Welcome");
// });

app.listen(8083, () => {
    console.log("Server running on port 8083");
});

