import React from "react";
import { Link } from '@reach/router';


const Landing = () => {


    return (
        <>
            <header className="container">
                <h1>Boston Common dog park</h1>
                <Link to={"/login"}>
                    Login
                </Link>
            </header>

            <div className="container">
                <button type="button" class="btn btn-primary">Primary</button> <br />
                <button type="button" class="btn btn-secondary">Secondary</button> <br />
                <button type="butt on" class="btn btn-success">Success</button> <br />
                <button type="button" class="btn btn-danger">Danger</button> <br />
                <button type="button" class="btn btn-warning">Warning</button> <br />
                <button type="button" class="btn btn-info">Info</button> <br />
                <button type="button" class="btn btn-light">Light</button> <br />
                <button type="button" class="btn btn-dark">Dark</button> <br />
                {/* <button type="button" class="btn btn-link">Link</button> */}


                <br />
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landing;
