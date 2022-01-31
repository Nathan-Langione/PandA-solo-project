import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

const DogList = (props) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/dogs')
            .then(res => {
                setDogs(res.data);
            }
            );

    }, [])
    const removeFromDom = dogId => {
        // Lint wants !== instead of !=
        // eslint-disable-next-line
        setDogs(dogs.filter(dog => dog._id != dogId))
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

            <div className="row flex-nowrap">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Breed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dogs.map((dog, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{dog.name}</td>
                                    <td>{dog.age}</td>
                                    <td>{dog.breed}</td>
                                    <td>
                                        <Link to={"/dog/" + dog._id}>
                                            details
                                        </Link> |
                                        <Link to={"/dog/" + dog._id + "/edit"}>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <footer className="row flex-nowrap text-center">
                <h1> This is where the footer information goes </h1>
            </footer>
        </div >
    )
}
export default DogList;