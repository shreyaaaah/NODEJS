// const createUser = (req, res) => {
//   res.send("This is post request of user router");
// };

// const getUsers = (req, res) => {
//   res.send("This is get request of user router");
// };

// export { getUsers, createUser };
import users from "../models/userModel.js";

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  res.send("post req from user")
};

export { getUsers, createUser };