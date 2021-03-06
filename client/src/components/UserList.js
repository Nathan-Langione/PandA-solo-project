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
                                        </Link> {/* |
                                        <Link to={"/user/" + user._id + "/edit"}>
                                            Edit
                                        </Link> */}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
            <footer className="row flex-nowrap text-center">
                <h1> This is where the footer information goes </h1>
            </footer>
        </div >
    )
}
export default UserList;