const fs = require("fs");
const path = require("path");


const userData = path.join(__dirname, "../data/dasUsersList.json");

const UserModels = {
  fileName: userData,

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  findAll: function () {
    return this.getData();
  },

  generatedId: function () {
    let allUser = this.findAll();
    let ultimoUsuario = allUser.pop();
    let idUserNew;
    if (ultimoUsuario) {
      idUserNew = ultimoUsuario.id + 1;
    } else {
      idUserNew = 1;
    }
    return idUserNew;
  },

  findByPk: function (id) {
    let allUser = this.findAll();
    let usuarioEncontrado = allUser.find((usuario) => usuario.id == id);
    return usuarioEncontrado;
  },

  findByField: function (field, valor) {
    let allUser = this.findAll();
    let usuarioEncontrado = allUser.find((usuario) => usuario[field] == valor);
    return usuarioEncontrado;
  },

  createUser: function (UserInfo) {
    let allUser = this.findAll();
    let newUser = {
      id: this.generatedId(),
      ...UserInfo, // de esta forma treaemos toda l ainformacion en una sola linea de todos los atributos del usuario
    };
    allUser.push(newUser);

    fs.writeFileSync(this.fileName, JSON.stringify(allUser, null, " "));
    return newUser; // devolvemos el usuario creado en caso deque lo querramos utilizar para alguna funcionalidad posterior
  },

  deleteUser: function(id){
    let allUser = this.findAll()
    let NewData = allUser.filter(function(user){
        return user.id != id;
      })
      fs.writeFileSync(this.fileName, JSON.stringify(NewData, null, " "))
      return true
  }
};

module.exports = UserModels
