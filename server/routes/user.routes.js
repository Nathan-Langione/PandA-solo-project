const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/user/register', UserController.register);
    app.post('/api/user/login', UserController.login);
    app.post('/api/user/logout', UserController.logout);
    app.get('/api/user/home', authenticate, UserController.userHomePage);
    /* app.get("/api/users", UserController.getAllUsers);
    app.get("/api/user/:_id", UserController.getOneUser);
    app.put("/api/user/:id", UserController.updateUser);
    app.delete("/api/user/:id", UserController.deleteUser); */
};