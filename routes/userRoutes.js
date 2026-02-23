
import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("This is a get req from user router");
});

userRouter.post("/", (req, res) => {
  res.send("This is a post request of user router");
});

export default userRouter;   