import express from "express";

const app = express();

app.use(express.json());

const auth = (req, res, next) => {
    if (req.body.token === 1234) {
        next();
    } else {
        res.send("Access Denied");
    }
};

app.post("/1234", auth, (req, res) => {
    res.send("Welcome");
});

app.listen(8083, () => {
    console.log("Server running on port 8083");
});