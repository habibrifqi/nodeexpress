const express = require("express");

const nodemon = require("nodemon");
const app = express();
const userRouter = require("./users");

const port = 3000;

app.get("/", (req, res) => {
    // console.log("sad")
    // res.status(403).end()
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("Hello About  !");
});

app.use(userRouter)

app.listen(port, () => {
  console.log(`oke ${port}`);
});
