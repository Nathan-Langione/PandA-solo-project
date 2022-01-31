import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import LikeButton from '../components/LikeButton';

const Detail = (props) => {
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
    }, [loaded])

    return (
        <>
            <div className="header">
                <h1>Dog Shelter</h1>
                <Link to={"/"}>
                    back to home
                </Link>
            </div>
            <div className="phrase2">
                <> {loaded && (<h2>Details about: {dogInfo.name}</h2>)}</>

            </div>
            <div className="content2">

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
        </>
    )
}
export default Detail;
