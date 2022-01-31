import React from "react";
// import { Link } from '@reach/router';


const Home = () => {


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
                {/* Start of links */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">
                        <h2 className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Useful Links</span>
                        </h2>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li>
                                <a href="https://friendsofthepublicgarden.org/our-parks/the-common/common-canine/" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Dog</span></a>
                            </li>
                            <li>
                                <a href="https://www.cityofboston.gov/animals/licenseapp/" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Dog License</span></a>
                            </li>
                            <li>
                                <a href="https://www.boston.gov/departments/animal-care-and-control/rules-and-regulations-owning-dog" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">RULES AND REGULATIONS FOR OWNING A PET</span></a>
                            </li>
                            <li>
                                <a href="https://www.mass.gov/info-details/massachusetts-law-about-animals" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Massachusetts law about animals</span></a>
                            </li>
                            <li>
                                <a href="https://veterinaryemergencygroup.com/locations/boston-ma/" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Veterinary Emergency Group</span></a>
                            </li>
                            {/* End of links */}
                        </ul>
                    </div>
                </div>
                <div className="col py-3 text-center">
                    <img className="mb-3" src="https://friendsofthepublicgarden.org/wp-content/uploads/2018/06/bostoncommonoverview@kylekleinphoto-1.jpg" alt="new" />
                </div>
            </div>

            <footer className="row flex-nowrap text-center">
                <h1> This is where the footer information goes </h1>
            </footer>
        </div >
    )
}
export default Home;
