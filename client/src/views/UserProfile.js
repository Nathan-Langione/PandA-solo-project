import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


import LikeButton from '../components/LikeButton';

const Detail = (props) => {
    const [userInfo, setUserInfo] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + props._id, { withCredentials: true })
            .then(res => {
                setUserInfo(res.data);
            }
            );

        // eslint-disable-next-line
    }, [])

    return (
        <>
            <header className="container">
                <h1>Boston Common dog park</h1>
            </header>
            <hr />

            <div className="container">
                <h2>Details about: {userInfo.firstName}</h2>

            </div>
            <div className="container">

                <LikeButton
                    name={userInfo.name}
                />
            </div>
            <footer className="container">
                <Link to={"/"}>
                    Go back to the Home page
                </Link>
            </footer>
        </>
    )
}
export default Detail;
