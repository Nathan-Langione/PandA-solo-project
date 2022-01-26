import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';



const UserList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users', { withCredentials: true })
            .then(res => {
                setUsers(res.data);
            }
            );

    }, [])
    const removeFromDom = userId => {
        // Lint wants !== instead of !=
        // eslint-disable-next-line
        setUsers(users.filter(user => user._id != userId))
    }
    return (
        <>
            <header className="container">
                <h1>Boston Common dog park</h1>
            </header>
            <hr />
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{user.firstName} {user.lastName} {user._id}</td>
                                    <td>
                                        <Link to={"/user/" + user._id}>
                                            User Proflie
                                        </Link> |
                                        <Link to={"/user/" + user._id + "/edit"}>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
            <footer className="container">
                <Link to={"/"}>
                    Go back to the landing
                </Link>
            </footer>
        </>
    )
}
export default UserList;