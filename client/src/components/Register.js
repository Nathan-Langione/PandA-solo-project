import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link, } from '@reach/router';


const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:000/api/user/register', {
            email: email,
            password: password
        },
            { withCredentials: true })
            .then(response => {
                console.log("register data", response.data);
                navigate(`/admin/home`)
            })
            .catch(error => {
                console.log("problem with register.js", error);
                setErrMessage(error.response.data.msg);
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
                    <div className="col s6">
                        <p>{errMessage ? errMessage : ""}</p>
                        <form onSubmit={register}>
                            <h2>User Registration</h2>
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
                            <button type="submit" name="action">Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Register;