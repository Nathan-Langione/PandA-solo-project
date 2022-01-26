import React from "react";
import { Link } from '@reach/router';


const Landing = () => {


    return (
        <>
            <header className="container">
                <div class="row">
                    <div class="col-6">
                        <h1>Boston Common dog park</h1>
                    </div>
                    <div class="col">
                        <Link to={"/login"}>
                            <h3>Login</h3>
                        </Link>
                    </div>
                    <div class="col">
                        <Link to={"/register"}>
                            <h3>Register</h3>
                        </Link>
                    </div>
                </div>
            </header>
            <hr />

            <div className="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h3>Informational links</h3>
                        <ul>
                            <li> link</li>
                            <li> link</li>
                            <li> link</li>
                            <li> link</li>
                            <li> link</li>
                            <li> link</li>
                            <li> link</li>
                            <li> link</li>
                        </ul>


                    </div>
                    <div class="col">
                        <div className="img-responsive">
                            <img src="https://friendsofthepublicgarden.org/wp-content/uploads/2018/06/bostoncommonoverview@kylekleinphoto-1.jpg" alt="new" />
                        </div>
                    </div>
                </div>
            </div>


            <footer className="container">
                <Link to={"/"}>
                    Go back to the landing
                </Link>
            </footer>
        </>
    )
}
export default Landing;
