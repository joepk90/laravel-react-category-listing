import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Home from "./home"
import About from './about';
import CategoryIndex from './CategoryIndex';

function Header() {
    return (
        <Router>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

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

        </Router>
    );
}

export default Header;