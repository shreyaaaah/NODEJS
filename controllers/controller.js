import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = "lpu"; 
export const users = []; 

export const signup = async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  
  if (!body.role) body.role = "student"; 

  users.push(body);
  res.json({ message: "User created successfully" });
};

export const login = async (req, res) => {
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
};