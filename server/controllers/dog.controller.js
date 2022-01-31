const Dog = require("../models/dog.model");

const createDog = (req, res) => {
    Dog.create(req.body)
        .then((newDog) => res.json(newDog))
        .catch(err => res.status(400).json(err))
};

const getAllDogs = (req, res) => {
    Dog.find()
        .then((allDogs) => res.json(allDogs))
        .catch((err) => console.log(err));
};

const getOneDog = (req, res) => {
    Dog.findOne({ _id: req.params._id })
        .then((queriedDog) => res.json(queriedDog))
        .catch((err) => console.log(err));
};

const updateDog = (req, res) => {
    // use id in url to query document want to update
    // second arg is the info from that queried doc to change
    Dog.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        // this will make sure validations are still run
        runValidators: true,
    })
        .then((updatedDog) => res.json(updatedDog))
        .catch(err => res.status(400).json(err))
};

const deleteDog = (req, res) => {
    Dog.deleteOne({ _id: req.params.id })
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {
    createDog,
    getAllDogs,
    getOneDog,
    updateDog,
    deleteDog,
};