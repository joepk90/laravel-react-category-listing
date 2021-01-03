import React, { Component } from 'react';

class Alert extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        const { alert } = this.props;

        if (!alert) return '';

        return (
            <div className={"alert alert-" + alert.type} role="alert">
                {alert.message}
            </div>
        );
    }
}

export default Alert;