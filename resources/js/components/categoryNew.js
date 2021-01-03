import React, { Component } from 'react';

import axios from 'axios';
import Alert from './alert';

class CategoryNew extends Component {

    constructor() {
        super();

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            category_name: '',
            alert: {}
        }
    }

    onChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value
        })
    }

    async onSubmit(e) {
        e.preventDefault();

        const category = {
            category_name: this.state.category_name
        }

        const alert = {};

        try {
            await axios.post('http://laravel-react-project.loc/api/category/store', category);

            this.setState({
                category_name: '',
                alert: {
                    message: 'record added successfuly',
                    type: 'success'
                }
            });

        } catch (err) {
            console.log(err);

            alert = {
                message: 'error: ' + err,
                type: 'danger'
            };

            this.setState({
                alert
            })
        }

    }

    render() {
        return (

            <div className="category-new">

                <Alert
                    alert={this.state.alert}
                />

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text"
                            className="form-control"
                            id="category_name"
                            placeholder="Enter category"
                            value={this.state.category_name}
                            onChange={this.onChangeCategoryName}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>

            </div>
        );
    }
}

export default CategoryNew;