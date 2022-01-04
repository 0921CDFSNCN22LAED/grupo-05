const bcryptjs = require('bcryptjs');

const accountsService = require('../services/accountsServices.js');
const accounts = accountsService.getAll();

const {validationResult} = require('express-validator');

const usersController = {
  registro: (req, res) => {
    res.render("users/register");
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
