import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import LikeButton from './LikeButton';

const DogList = (props) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/dogs')
            .then(res => {
                setDogs(res.data.sort((a, b) => (a.type > b.type) ? 1 : -1));
            }
            );

    }, [])
    const removeFromDom = dogId => {
        // Lint wants !== instead of !=
        // eslint-disable-next-line
        setDogs(dogs.filter(dog => dog._id != dogId))
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dogs.map((dog, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{dog.name}</td>
                                <td>{dog.age}</td>
                                <td>
                                    <Link to={"/dogs/" + dog._id}>
                                        details
                                    </Link> |
                                    <Link to={"/dogs/" + dog._id + "/edit"}>
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}
export default DogList;