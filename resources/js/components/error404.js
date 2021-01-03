import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Error404 extends Component {

    render() {
        return (
            <p className="alert alert-danger">

                Page Not Found <Link className="alert-link" to="/">Back to Home</Link>

            </p>
        );
    }
}

export default Error404;