let users = [
  { id: 1, name: "habib", pass: 111 },
  { id: 2, name: "rifqi", pass: 222 },
];

module.exports = {
  index: (req, res) => {
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
    users.push(req.body);
    res.send({
      status: true,
      message: "data user berhasil di simpan",
      data: users,
      method: req.method,
      url: req.url,
    });
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
