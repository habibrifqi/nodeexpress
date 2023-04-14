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
// middleware
app.use(myLogger);

//view engine 
app.set('view engine', 'ejs');

//untuk memangil/membuat folder statis
app.use('/assets',express.static('public'))

app.get("/", (req, res) => {
  const emboh ={
    nama :"habib",
    date: req.time.toString()
  }
    // console.log("sad")
    // res.status(403).end()
  res.render(`pages/index`,{emboh : emboh});
});

app.get("/about", (req, res) => {
  res.render(`pages/about`);
});

app.use(userRouter)

app.listen(port, () => {
  console.log(`oke ${port}`);
});
