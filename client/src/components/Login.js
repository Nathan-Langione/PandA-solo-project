import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link, } from '@reach/router';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/admin/login', {
            email: email,
            password: password
        },
            { withCredentials: true })
            .then(response => {
                console.log("login data", response.data);
                navigate(`/admin/home`)
            })
            .catch(error => {
                console.log("problem with login.js", error);
                setErrMessage(error.response.data.msg);
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
                        <p>{errMessage ? errMessage : ""}</p>
                        <form onSubmit={login}>
                            <h3>Welcome Back! Please log in </h3>
                            <div className="input-field col s12 input-field input[type=text]:focus">
                                <input
                                    type="text"
                                    placeholder="Enter Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label>Email:</label>
                            </div>
                            <div className="input-field col s12 blue-field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <label>Password:</label>
                            </div>
                            <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;