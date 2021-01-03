import React, { Component } from 'react';

import axios from 'axios';

class CategoryNew extends Component {

    constructor() {
        super();

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            category_name: ''
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

        try {
            await axios.post('http://laravel-react-project.loc/api/category/store', category);

            this.setState({
                category_name: ''
            });

        } catch (err) {
            console.log(err);
        }

    }

    render() {
        return (
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
        );
    }
}

export default CategoryNew;