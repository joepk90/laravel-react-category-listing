import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './footer';
import Header from './header';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


function Index() {
    return (
        <React.Fragment>
            <Header />
            <Footer />
        </React.Fragment>

    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('app'));
}
