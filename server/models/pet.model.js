const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be 2 characters or more!"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [0, "Age must be greater than 0!"],
        max: [25, "Your pet probably isn't older than 25"]
    },
    breed: {
        type: String,
        required: [true, "Breed is required"],
        minLength: [2, "Breed must be 2 characters or more!"]
    },
    color: {
        type: String,
        required: [true, "Color is required"],
        minLength: [2, "Color must be 2 characters or more!"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [2, "Description must be 2 characters or more!"]
    }
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);
