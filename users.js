const express = require("express");
const Router = express.Router();
//users
let users = [
    {id:1,name:"habib",pass:111},
    {id:2,name:"rifqi",pass:222}
]

Router.route("/users")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    res.send("Post User");
  });

Router.put("/users/:id", (req, res) => {
    const id = req.params
    res.send(id);
});

Router.delete("/users/:userId", (req, res) => {
    res.send(req.params);
});

module.exports = Router;
