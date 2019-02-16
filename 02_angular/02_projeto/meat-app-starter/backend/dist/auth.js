"use strict";
exports.__esModule = true;
var users_1 = require("./users");
exports.handleAuthentication = function (request, response) {
    var user = request.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        response.json({
            name: dbUser.name,
            email: dbUser.email
        });
    }
    else {
        response.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
