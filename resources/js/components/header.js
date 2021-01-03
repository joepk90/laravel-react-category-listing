import React from 'react';
import { Link, Route } from "react-router-dom";

import Home from "./home"
import About from './about';
import CategoryIndex from './CategoryIndex';
import CategoryNew from './CategoryNew';
import CategoryEdit from './CategoryEdit';

function Header() {
    return (
        <React.Fragment>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/category" className="nav-link">Category</Link>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                </div>
            </nav>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/category" component={CategoryIndex} />

            {/* // these routes are also being defined in the category index page - there might be a better way of handling this... */}
            <Route exact path="/category/add" component={CategoryIndex} />
            <Route exact path="/category/edit/:id" component={CategoryIndex} />

        </React.Fragment>
    );
}

export default Header;