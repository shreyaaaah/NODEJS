import express from "express";
import { signup, login, users } from "../controllers/controller.js";
import { authenticateToken, authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/users", authenticateToken, authorizeAdmin, (req, res) => {
  res.json(users);
});

router.get("/", authenticateToken, (req, res) => {
  res.send("Hello World! Your token is valid.");
});

export default router;