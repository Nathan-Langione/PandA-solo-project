const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/users", UserController.registerUser);
    app.get("/api/users", UserController.getAllUsers);
    app.get("/api/users/:_id", UserController.getOneUser);
    app.put("/api/users/:id", UserController.updateUser);
    app.delete("/api/users/:id", UserController.deleteUser);
};