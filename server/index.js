const express = require("express");
var path = require("path");
const port = 3001;
const app = express();
const axios = require("axios").default;
let users = [];

const listUsers = async () => {
  try {
    const res = await axios.get("https://randomuser.me/api/?results=50&nat=us");
    return (users = res.data.results);
  } catch (err) {
    console.error(err);
  }
};

listUsers();

app.get("/api/users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

// app.post('/api/users', (req, res) => {
//   const user = req.body;
//   console.log('Adding user:', user);
//   users.push(user);
//   res.json("user addedd");
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(3001, () =>
  console.log(`Express server is running on port ${port}`)
);
