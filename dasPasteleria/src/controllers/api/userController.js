const db = require("../../database/models");

const Users = db.User;

const userController = {
        list: (req, res) => {
            Users.findAll({
                attributes: ['id', 'user_name','email'],
               // raw: true
            })
            
            .then((users) => {
             let newUsers = users.map(user=>{
              user.setDataValue ('detail', 'http://localhost:3030/api/users/'+user.id) 
              console.log(user)
               return user
              })
    
         let respuesta ={
                count: newUsers.length, 
                users:newUsers
            }
    
            res.status(200).json({
                status: 200,
                total: users.length,
                respuesta,
        });
            });
        },
    
    detail:  (req, res) => {
        Users.findByPk(req.params.id, {
            attributes: ['id', 'user_name','email', 'avatar'],
            raw: true
        })
        .then((user) => {
            user.avatar = '/img/users-img/'+user.avatar
            let respuesta ={
               user: user
                }
            
        res.status(200).json({
        status: 200,
        respuesta,
    });
    });
    },
    
    register: (req, res) => {
        Users.create(req.body).then((user) => {
        res.status(200).json({
        status: 200,
        data: user,
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
