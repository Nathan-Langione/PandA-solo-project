import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import LikeButton from '../components/LikeButton';

const DogProfile = (props) => {
    const [dogInfo, setDogInfo] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/dog/" + props.id)
            .then(res => {
                setDogInfo({
                    ...res.data
                });
                setLoaded(true);
            })
        // eslint-disable-next-line
    }, [])

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

            <div className="row ">
                <> {loaded && (<h2>Details about: {dogInfo.name}</h2>)}</>

            </div>
            <div className="row ">

                <>
                    <p>Dog age : {dogInfo.age}</p>
                    <p>Dog breed : {dogInfo.breed}</p>
                    <p>Dog color : {dogInfo.color}</p>
                    <p>Dog description: {dogInfo.description}</p>
                </>
                <LikeButton
                    name={dogInfo.name}
                />
            </div>
            <footer className="row flex-nowrap text-center">
                <h1> This is where the footer information goes </h1>
            </footer>
        </div >
    )
}
export default DogProfile;
