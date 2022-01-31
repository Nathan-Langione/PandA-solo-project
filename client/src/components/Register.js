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
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        };
        console.log(newUser)
        axios.post('http://localhost:8000/api/user/register',
            newUser,
            { withCredentials: true })
            .then(response => {
                console.log("register data", response.data);
                console.log("success")
                navigate(`/login`)
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
        <div className="container-fluid min-vh-100">
            <div className=" row text-center">
                <h1 >The Boston Common Dog Park</h1>
                <h4>A social networking website</h4>
            </div>

            <header className="row flex-nowrap">
                {/* Navbar start */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/users">All Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dogs">All Dogs</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* Navbar end */}
            </header>

            <hr />

            <div className="container">
                <div class="form-signin">
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <form onSubmit={register}>
                        <h1 class="h3 mb-3 fw-normal">Register</h1>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="John" value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Smith" value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                            <label for="floatingInput">Last Name </label>
                        </div>
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
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm password" value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label for="floatingPassword">Confirm password</label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </div >
            </div>

            <footer className="row flex-nowrap text-center">
                <h1> This is where the footer information goes </h1>
            </footer>
        </div>
    )
};

export default Register;