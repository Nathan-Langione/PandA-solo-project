import React, { useState } from "react";
// eslint-disable-next-line
import axios from 'axios';
import { Link } from '@reach/router';

const DogForm = (props) => {
    const { initialName, initialAge, initialDescription, initialBreed, initialColor, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [age, setAge] = useState(initialAge);
    const [description, setDescription] = useState(initialDescription);
    const [breed, setBreed] = useState(initialBreed);
    const [color, setColor] = useState(initialColor);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name, age, description, breed, color });
        setName("");
        setAge("");
        setDescription("");
        setBreed("");
        setColor("");

    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-div">
                    <label>Dog Name:</label><br />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-div">
                    <label>Dog Age:</label><br />
                    <input
                        type="text"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="form-div">
                    <label>Dog Breed:</label><br />
                    <input
                        type="text"
                        name="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                </div>
                <div className="form-div">
                    <label>Dog Color:</label><br />
                    <input
                        type="text"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <div className="form-div">
                    <label>Dog Description:</label><br />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <p>
                    <Link to="/dogs">
                        <button type="button">
                            Cancel
                        </button>
                    </Link>
                    <input type="submit" />
                </p>
            </form >
        </div>
    );
}

export default DogForm;