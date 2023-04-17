const { v4: uuidv4 } = require('uuid');

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
    users.push({
      id: uuidv4(),
      name : req.body.name,
      pass : req.body.password
    });
    res.redirect('/users');
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
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.name = req.body.name;
        user.pass = req.body.pass;

        return user;
      }
    });
    res.json(users);
  },
  delete: (req, res) => {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);

    res.send(users);
  },
};
