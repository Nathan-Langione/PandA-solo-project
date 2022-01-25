import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link, } from '@reach/router';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login', {
            email: email,
            password: password
        },
            { withCredentials: true })
            .then(response => {
                console.log("login data", response.data);
                navigate(`/`)
            })
            .catch(err => {
                console.log("problem with login.js", err);
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
                    Go back to the landing
                </Link>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col s6">
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <form onSubmit={login}>
                            <h3>Welcome Back, Please log in! </h3>
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

export default Login;