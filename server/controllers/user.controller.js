const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET);

            res
                .cookie("usertoken", userToken, secret, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));

};

const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);

    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, secret, {
            httpOnly: true
        })
        .json({ msg: "success!" });
};

const logout = (req, res) => {
    res.clearCookie("usertoken");
    res.json({ msg: "usertoken cookie cleared" });
};

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
    register,
    login,
    logout,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};