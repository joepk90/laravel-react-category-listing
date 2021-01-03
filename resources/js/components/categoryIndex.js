import React, { Component } from 'react';

import { Link, Route } from "react-router-dom";
import CategoryListing from "./categoryListing"
import CategoryNew from './CategoryNew';
import CategoryEdit from './CategoryEdit';

class CategoryIndex extends Component {
    render() {
        return (
            <div>
                <div className="container mb-2">
                    <hr />
                    <Link className="btn btn-primary mr-2" to="/category">Listing</Link>
                    <Link className="btn btn-primary mr-2" to="/category/add">Add</Link>

                    <Route exact path="/category" component={CategoryListing} />
                    <Route exact path="/category/add" component={CategoryNew} />
                    <Route exact path="/category/edit/:id" component={CategoryEdit} />

                </div>
            </div>
        );
    }
}

export default CategoryIndex;