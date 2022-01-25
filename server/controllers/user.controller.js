const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = (req, res) => {
    const user = new User(req.body);

    user
        .save()
        .then(() => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.status(400).json(err));

};

const login = async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user === null) {
            return res.status(400).json({ msg: "Invalid Login1" })
        };
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if (!correctPassword) {
            return res.status(400).json({ msg: "Invalid Login2" })
        } else {
            const userToken = jwt.sign({
                _id: user._id
            }, process.env.JWT_SECRET);
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({
                    msg: "success!",
                    userLogged: {
                        username: `${user.firstName} ${user.lastName} `,
                        id: `${user._id}`
                    }
                });
        }
    }
    catch (err) { res.status(400).json({ msg: "Invalid Login3" }) }
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