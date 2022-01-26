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
                navigate(`/users`)
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
            </header>
            <hr />
            <div className="container">
                <div class="form-signin">
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <form onSubmit={login}>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </div >
            </div>
            <footer className="container">
                <Link to={"/"}>
                    Go back to the landing
                </Link>
            </footer>
        </>
    )
};

export default Login;