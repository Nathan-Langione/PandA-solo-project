import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import DogForm from '../components/DogForm';

const EditDogProfile = (props) => {
    const { id } = props;
    const [dog, setDog] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/dog/' + id)
            .then(res => {
                setDog(res.data);
                setLoaded(true);
            })
        // eslint-disable-next-line
    }, [loaded]);

    const updateDog = dog => {
        axios.put('http://localhost:8000/api/dog/' + id, dog)
            .then(res => {
                console.log(res);
                navigate("/dog/" + id);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                setLoaded(false);
            })
    }
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

            <div className="row">
                {loaded && (<h2>Edit {dog.name}</h2>)}
            </div>
            <div className="content">
                {loaded && (
                    <>
                        <DogForm
                            onSubmitProp={updateDog}
                            initialName={dog.name}
                            initialAge={dog.age}
                            initialBreed={dog.breed}
                            initialColor={dog.color}
                            initialDescription={dog.description}
                        />
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                    </>
                )}
            </div>
        </div>
    )
}
export default EditDogProfile;

