// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import DogForm from '../components/DogForm';

const Create = () => {
    const [dogs, setDogs] = useState([]);
    const [errors, setErrors] = useState([]);

    const createDog = dog => {
        axios.post('http://localhost:8000/api/dogs', dog)
            .then(res => {
                console.log(res);
                setDogs([...dogs, res.data]);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <>
            <div className="header">
                <h1>Dog Shelter</h1>
                <Link to={"/"}>
                    back to home
                </Link>
            </div>
            <div className="phrase">
                <h2>Know a dog needing a home?</h2>
            </div>
            <div className="content">
                <DogForm
                    onSubmitProp={createDog}
                    initialName=""
                    initialType=""
                    initialDescription=""
                />
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </div>
        </>
    )
}
export default Create;