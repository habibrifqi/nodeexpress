const express = require("express");
const Router = express.Router();
//users
let users = [
  { id: 1, name: "habib", pass: 111 },
  { id: 2, name: "rifqi", pass: 222 },
];

Router.route("/users")
  .get((req, res) => {
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: "data ksoong"
      });
    }
  })
  .post((req, res) => {
    users.push(req.body);
    res.send(users);
  });

Router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  users.filter((user) => {
    if (user.id == id) {
      user.id = id;
      user.name = req.body.name;
      user.pass = req.body.pass;

      return user;
    }
  });
  res.json(users);
});

Router.delete("/users/:userId", (req, res) => {
  let id = req.params.userId;
  users = users.filter((user) => user.id != id);

  res.send(users);
});

module.exports = Router;
