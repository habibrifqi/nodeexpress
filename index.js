const express = require("express");

const nodemon = require("nodemon");

const userRouter = require("./router/users");
const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 

let myLogger = function (req, res, next) {
  req.time = new Date()
  next()
}

app.use(myLogger);


app.get("/", (req, res) => {
    // console.log("sad")
    // res.status(403).end()
  res.send(`Home ${req.time.toString()}`);
});

app.get("/about", (req, res) => {
  res.send("Hello About  !");
});

app.use(userRouter)

app.listen(port, () => {
  console.log(`oke ${port}`);
});
