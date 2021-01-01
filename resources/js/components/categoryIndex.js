import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import CategoryListing from "./categoryListing"
import CategoryNew from "./categoryNew"

class CategoryIndex extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="container mb-2">

                        <Link className="btn btn-primary mr-2" to="/category">Listing</Link>
                        <Link className="btn btn-primary mr-2" to="/category/add">Add</Link>

                        <Route exact path="/category" component={CategoryListing} />
                        <Route exact path="/category/add" component={CategoryNew} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default CategoryIndex;