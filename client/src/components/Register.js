import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link, } from '@reach/router';


const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/register', {
        },
            { withCredentials: true })
            .then(response => {
                console.log("register data", response.data);

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
    };
    return (
        <>
            <header className="container">
                <h1>Boston Common dog park</h1>
                <Link to={"/"}>
                    <h3>Go back to the landing</h3>
                </Link>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col">

                        <form onSubmit={register}>
                            <h2>User Registration</h2>
                            {errors.map((err, index) => <p key={index}>{err}</p>)}
                            <div>
                                <label>First Name </label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div>
                                <label>Last Name </label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <label>Confirm Password:</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <button type="submit" name="action">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Register;