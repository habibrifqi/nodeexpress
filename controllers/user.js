const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
// const Users = require('../models/user');
const User = require("../models/user");
// let users = [
//   { id: 1, name: "habib", pass: 111 },
//   { id: 2, name: "rifqi", pass: 222 },
// ];

module.exports = {
  index: (req, res) => {
    User.find({}).exec()
    .then(users => {
      console.log('Data pengguna:', users);
      const datauser = users;
      res.render("pages/user/index", { users: datauser });
    })
    .catch(err => {
      console.log(err);
    });  

    // res.json(users);
    
    // if (users.length > 0) {
    //   res.json({
    //     status: true,
    //     data: users,
    //     method: req.method,
    //     url: req.url,
    //   });
    // } else {
    //   res.json({
    //     status: false,
    //     message: "data ksoong"
    //   });
    // }
  },
  create: (req, res) => {
    res.render("pages/user/create");
  },
  store: (req, res) => {
    const user = new User({
      name: req.body.name,
      password: req.body.password,
    });

    //cara pertama
    // user.save()
    // .then(savedModel => {
    //   // Menangani jika penyimpanan berhasil
    //   console.log('Model berhasil disimpan:', savedModel);
    //   res.redirect('/users');
    // })
    // .catch(error => {
    //   console.error(error.message);
    // });

    //cara kedua
    User.create(user)
      .then((user) => {
        console.log("Data berhasil disimpan: " + user);
        res.redirect("/users");
      })
      .catch((err) => {
        console.log(err);
      });

    // users.push({
    //   id: uuidv4(),
    //   name : req.body.name,
    //   pass : req.body.password
    // });
  },
  show: (req, res) => {
    const id = req.params.id;
    const data = users.filter((user) => {
      return user.id == id;
    });
    res.render("pages/user/show", { user: data });
  },
  update: (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.name = req.body.name;
        user.pass = req.body.password;

        return user;
      }
    });
    res.redirect("/users");
  },
  delete: (req, res) => {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);

    res.send(users);
  },
};

[
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
