import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './footer';
import Header from './header';

function Index() {
    return (
        <div className="container">
            <Footer />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Landing Page (Index)</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
