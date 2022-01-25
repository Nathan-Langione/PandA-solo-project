const Pet = require("../models/pet.model");

const createPet = (req, res) => {
    Pet.create(req.body)
        .then((newPet) => res.json(newPet))
        .catch(err => res.status(400).json(err))
};

const getAllPets = (req, res) => {
    Pet.find()
        .then((allPets) => res.json(allPets))
        .catch((err) => console.log(err));
};

const getOnePet = (req, res) => {
    Pet.findOne({ _id: req.params._id })
        .then((queriedPet) => res.json(queriedPet))
        .catch((err) => console.log(err));
};

const updatePet = (req, res) => {
    // use id in url to query document want to update
    // second arg is the info from that queried doc to change
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        // this will make sure validations are still run
        runValidators: true,
    })
        .then((updatedPet) => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
};

const deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {
    createPet,
    getAllPets,
    getOnePet,
    updatePet,
    deletePet,
};