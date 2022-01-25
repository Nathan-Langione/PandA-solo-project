import React from "react";
import { Link } from '@reach/router';
const Landing = () => {


    return (
        <>
            <header className="container">
                <h1>Boston Common dog park</h1>
                <Link to={"/"}>
                    Go back to the landing
                </Link>
            </header>

            <div className="container">
                <p>login stuff</p>
            </div>
        </>
    )
}
export default Landing;