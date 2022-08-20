const db = require("../../database/models");

const Users = db.User;

const userController = {
    register: (req, res) => {
        Users.create(req.body).then((user) => {
        res.status(200).json({
        status: 200,
        data: user,
    });
    });
},
list: (req, res) => {
    Users.findAll().then((users) => {
    res.status(200).json({
        status: 200,
        total: users.length,
        data: users,
});
    });
},
update: (req, res) => {
    Users.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    .then(resolve=>{
        res.status(200).json({
            status: 200,
            edit: resolve
        })
    })
},
delete:  (req, res) => {
    Users.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(resolve=>{
        res.status(200).json({
            status: 200,
            edit: resolve
        })
    })

}
}

module.exports = userController;
