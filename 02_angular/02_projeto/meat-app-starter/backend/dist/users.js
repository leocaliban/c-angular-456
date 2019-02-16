"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (outro) {
        return outro !== undefined &&
            outro.email === this.email &&
            outro.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'jack@gmail.com': new User('jack@gmail.com', 'Jack Bauer', 'uct123'),
    'padrao@gmail.com': new User('padrao@gmail.com', 'padrao', 'padrao')
};
