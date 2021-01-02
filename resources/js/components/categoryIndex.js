import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import CategoryListing from "./categoryListing"
import CategoryNew from "./categoryNew"
import CategoryEdit from "./categoryEdit"

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
                        <Route exact path="/category/edit/:id" component={CategoryEdit} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default CategoryIndex;