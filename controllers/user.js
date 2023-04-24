const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
// const Users = require('../models/user');
const User = require('../models/user');
let users = [
  { id: 1, name: "habib", pass: 111 },
  { id: 2, name: "rifqi", pass: 222 },
];


module.exports = {
  index: (req, res) => {
    // res.json(users);
    res.render("pages/user/index", { users: users });
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
      name :req.body.name,
      password :req.body.password
    });

    user.save()
    .then(savedModel => {
      // Menangani jika penyimpanan berhasil
      // console.log(data);
      // res.redirect('/users');
      console.log('Model berhasil disimpan:', savedModel);
      res.redirect('/users');
    })
    .catch(error => {
      // Menangani jika terjadi kesalahan
      // if (error) return handleError(error);
      //  handleError(error);
      console.error(error.message);
    });

    // user.save(function(err, data) {
    //   if (err) return handleError(err);
    //     console.log(data);
    //   // saved!
   
    // }); 

    // users.push({
    //   id: uuidv4(),
    //   name : req.body.name,
    //   pass : req.body.password
    // });
    
  },
  show:(req,res)=>{
    const id  = req.params.id
    const data = users.filter(user =>{
      return user.id == id;
      })
    res.render('pages/user/show', {user:data});

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
    res.redirect('/users');
  },
  delete: (req, res) => {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);

    res.send(users);
  },
};


[
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]