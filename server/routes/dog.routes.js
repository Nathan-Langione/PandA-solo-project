const DogController = require("../controllers/dog.controller");

module.exports = (app) => {
    app.post("/api/dog", DogController.createDog);
    app.get("/api/dogs", DogController.getAllDogs);
    app.get("/api/dog/:_id", DogController.getOneDog);
    app.put("/api/dog/:id", DogController.updateDog);
    app.delete("/api/dog/:id", DogController.deleteDog);
};