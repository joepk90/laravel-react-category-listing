import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './footer';
import Header from './header';

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
    ReactDOM.render(<Index />, document.getElementById('app'));
}
