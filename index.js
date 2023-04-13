const express = require("express");

const nodemon = require("nodemon");

const userRouter = require("./users");
const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 


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
