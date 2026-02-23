
// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const app = express();
// const SECRET_KEY = "lpu";

// app.use(express.json());

// const users = [];

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });

//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) return res.status(403).json({ message: "Invalid or Expired Token" });
//     req.user = user;
//     next();
//   });
// };

// app.post("/signup", async (req, res) => {
//   const body = req.body;
//   const hashPassword = await bcrypt.hash(body.password, 10);
//   body.password = hashPassword;
//   users.push(body);
//   res.json({ message: "User created successfully", allUsers: users });
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const found = users.find((user) => user.email === email);
  
//   if (found) {
//     const chkPassword = await bcrypt.compare(password, found.password);
//     if (chkPassword) {
//       const token = jwt.sign({ email: found.email }, SECRET_KEY);
//       res.status(200).json({ 
//         message: "success", 
//         token: token 
//       });
//     } else {
//       res.status(401).json({ message: "Invalid Password" });
//     }
//   } else {
//     res.status(401).json({ message: "User not found" });
//   }
// });

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.get("/", authenticateToken, (req, res) => {
//   res.send("Hello World! Your token is valid.");
// });

// app.listen(8083, () => {
//   console.log("Server running on http://localhost:8083");
// });
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authenticateToken, authorizeAdmin } from "./middleware/auth.js";

const app = express();
const SECRET_KEY = "lpu";

app.use(express.json());

const users = [];

app.post("/signup", async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  
  if (!body.role) body.role = "student"; 

  users.push(body);
  res.json({ message: "User created successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const found = users.find((user) => user.email === email);
  
  if (found) {
    const chkPassword = await bcrypt.compare(password, found.password);
    if (chkPassword) {
    
      const token = jwt.sign({ email: found.email, role: found.role }, SECRET_KEY);
      res.status(200).json({ message: "success", token: token });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
});


app.get("/users", authenticateToken, authorizeAdmin, (req, res) => {
  res.json(users);
});

app.get("/", authenticateToken, (req, res) => {
  res.send("Hello World! Your token is valid.");
});

app.listen(8083, () => {
  console.log("Server running on http://localhost:8083");
});