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
        <>
            <header className="container">
                <h1>Boston Common dog park</h1>
            </header>



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

            <footer className="container">
                <Link to={"/"}>
                    Go back to the landing
                </Link>
            </footer>
        </>
    )
};

export default Register;