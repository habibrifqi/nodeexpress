const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("Hello About  !");
});
//users
app.get("/users", (req, res) => {
  res.send("Get User  !");
});
app.post("/users", (req, res) => {
  response.send("Post User");
});
app.put("/users", (req, res) => {
  response.send("put User");
});
app.delete("/users", (req, res) => {
  response.send("delete User");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
