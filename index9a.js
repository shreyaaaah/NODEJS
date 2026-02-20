import express from "express";

const app = express();

const auth = (req, res, next) => {
    if (req.path === "/1234") {
        next();
    } else {
        res.send("Stopped");
    }
};

app.get("/1234", auth, (req, res) => {
    res.send("Welcome");
});

app.listen(8083, () => {
    console.log("Server running on port 8083");
});