const bcryptjs = require('bcryptjs');

const accountsService = require('../services/accountsServices.js');
const accounts = accountsService.getAll();

const {validationResult} = require('express-validator');

const usersController = {
  registro: (req, res) => {
    res.render("users/register");
  },
  accountStore: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let accountDb = accountsService.findByField('email', req.body.email)
      
      if (accountDb){
          errors.errors.push({
              value: req.body.email,
              msg: 'Este mail ya esta en uso',
              param: 'email',
              location: 'body'
          })
          res.render('users/register',{errors: errors.errors})
          return
      }
      let account = {
          id: Date.now(),
          name: req.body.name,
          email: req.body.email,
          birthday: req.body.birthday,
          dni: req.body.dni,
          password: bcryptjs.hashSync(req.body.password, 10),
          category: 'user'
      };

      accounts.push(account);
      accountsService.saveAccounts();
      
      let userLogin = accountsService.findByField('email', req.body.email);
      res.redirect('/users/cuenta');


  } else {
      res.render('users/register',
      {errors: errors.errors, old: req.body})
  }
  },
  login: (req, res) => {
    res.render("users/login");
  },
  loginProcess: (req, res) => {
    let errors = validationResult(req);
    
    if (errors.isEmpty()){
      let userLogin = accountsService.findByField('email', req.body.email)

      if (userLogin){
        let passwordOk = bcryptjs.compareSync(req.body.password, userLogin.password);
        if (passwordOk){
          res.redirect('/users/cuenta');
          return
        }
        else{
          errors.errors.push({
            value: req.body.email,
            msg: 'La contraseña es incorrecta',
            param: 'password',
            location: 'body'
        })
        res.render('users/login', {
            errors: errors.errors
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
