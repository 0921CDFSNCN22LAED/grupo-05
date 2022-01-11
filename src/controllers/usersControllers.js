const bcryptjs = require('bcryptjs');

const accountsService = require('../services/accountsServices.js');
const accounts = accountsService.getAll();

const { validationResult } = require('express-validator');
const { redirect } = require('express/lib/response');

const usersController = {
  registro: (req, res) => {
    res.render("users/register");
  },
  registroProcesado: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let usuarioDb = accountsService.findByField("email", req.body.email)
      if (usuarioDb) {
        errors.errors.push({
          value: req.body.email,
          msg: "Ya existe un usuario con ese email",
          param: "email",
          location: "body"
        })
        res.render("users/register", { msg: errors.errors })
      };
      let newAccount = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
        dni: req.body.dni,
        password: bcryptjs.hashSync(req.body.password, 10),
        category: "user"
      }
      accounts.push(newAccount);
      accountsService.saveAccounts();
      res.redirect("/");
    }
    else {
      res.render("users/register", { old: req.body, msg: errors.errors })
    }
  },
  login: (req, res) => {
    res.render("users/login");
  },
  loginProcess: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let userLogin = accountsService.findByField('email', req.body.email)

      if (userLogin) {
        let passwordOk = bcryptjs.compareSync(req.body.password, userLogin.password);
        if (passwordOk) {
          res.redirect('/users/cuenta');
          return
        }
        else {
          errors.errors.push({
            value: req.body.email,
            msg: 'La contraseña es incorrecta',
            param: 'password',
            location: 'body'
          })
          res.render('users/login', {
            msg: errors.errors
          })
          return
        }
      }
    }
  },
  cuenta: (req, res) => {
    res.render('users/cuenta')
  }

}

module.exports = usersController;
