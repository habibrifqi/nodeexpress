const express = require("express");
const Router = express.Router();

const usercontroller = require("../controllers/user");
//users

Router.route("/users").get(usercontroller.index).post(usercontroller.store);

Router.get("/users/create", usercontroller.create);

Router.get("/users/:id", usercontroller.show);

Router.put("/users/:id", usercontroller.update);

Router.delete("/users/:userId", usercontroller.delete);

module.exports = Router;
