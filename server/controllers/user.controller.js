const User = require("../models/user.model");

const registerUser = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
},
const getAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => res.json(allUsers))
        .catch((err) => console.log(err));
};

const getOneUser = (req, res) => {
    User.findOne({ _id: req.params._id })
        .then((queriedUser) => res.json(queriedUser))
        .catch((err) => console.log(err));
};

const updateUser = (req, res) => {
    // use id in url to query document want to update
    // second arg is the info from that queried doc to change
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        // this will make sure validations are still run
        runValidators: true,
    })
        .then((updatedUser) => res.json(updatedUser))
        .catch(err => res.status(400).json(err))
};

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {
    registerUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};