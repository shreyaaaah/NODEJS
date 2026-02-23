import express from "express";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send("This is a get req from product router");
});

productRouter.post("/", (req, res) => {
  res.send("This is a post request of product router");
});

export default productRouter;  