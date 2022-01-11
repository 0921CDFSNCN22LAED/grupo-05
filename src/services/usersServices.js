const fs = require('fs');

const user = {
    filename: '/src/data/users.json',

    getData: function (){
        return JSON.parse(fs.readFileSync(this.filename, 'utf8'));
    },

    findAll: function (){
        return this.getData();
    },


    findByField: function (field, text) {
        let allUser = this.findAll();
        let userFound = allUser.find(oneUser => oneUser[field]===text),
        return userFound;
    }
}
module.exports = User;