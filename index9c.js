import express from "express";

const app = express();

app.use(express.json());

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === "1234" || token === "Bearer 1234") {
        next();
    } else {
        res.send("Access Denied");
    }
};

app.get("/", auth, (req, res) => {
    res.send("Welcome");
});

app.listen(8083, () => {
    console.log("Server running on port 8083");
});