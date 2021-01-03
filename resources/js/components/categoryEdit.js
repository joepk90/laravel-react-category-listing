import React, { Component } from 'react';

import axios from 'axios';
import Alert from './alert';

class CategoryEdit extends Component {

    constructor(props) {
        super(props);

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            category_name: '',
            alert: {}
        }
    }

    async getCategoryData() {

        const response = await axios.get('http://laravel-react-project.loc/api/category/edit/' + this.props.match.params.id);

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

        const alert = {};

        try {
            await axios.put('http://laravel-react-project.loc/api/category/update/' + this.props.match.params.id, category);

            this.setState({
                alert: {
                    message: 'record updated successfuly',
                    type: 'success'
                }
            })

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
            <div className="category-edit">

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

export default CategoryEdit;