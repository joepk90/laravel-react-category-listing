import React, { Component } from 'react';

import axios from 'axios';

class CategoryEdit extends Component {

    constructor(props) {
        super(props);

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            category_name: ''
        }
    }

    async getCategoryData() {

        const response = await axios.get('http://laravel-react-project.loc/category/edit/' + this.props.match.params.id);

        this.setState({
            category_name: response.data.name
        });

    }

    componentDidMount() {

        this.getCategoryData();

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
            await axios.put('http://laravel-react-project.loc/category/update/' + this.props.match.params.id, category);
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

export default CategoryEdit;