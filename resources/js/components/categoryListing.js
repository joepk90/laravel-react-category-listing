import React, { Component } from 'react';
import axios from 'axios';


class CategoryListing extends Component {

    constructor() {
        super();

        this.state = {
            categories: []
        }
    }

    async getCategories() {

        const categories = await axios.get('http://laravel-react-project.loc/category');

        this.setState({
            categories: categories.data
        });
    }

    async handleOnDelete(category_id) {

        const response = await axios.delete('http://laravel-react-project.loc/category/delete/' + category_id);

        console.log(response);

        const categories = this.state.categories.filter(category => category.id !== category_id);

        this.setState({
            categories
        })

    }

    componentDidMount() {

        this.getCategories();

    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.categories.map(category => {

                        return (
                            <tr key={category.id}>
                                <th scope="row">{category.id}</th>
                                <td>{category.name}</td>
                                <td>{category.active}</td>
                                <td>{category.created_at}</td>
                                <td>{category.updated_at}</td>
                                <td><a href="#" onClick={() => this.handleOnDelete(category.id)}>Delete</a></td>
                            </tr>
                        );

                    })}

                </tbody>
            </table>
        );
    }
}

export default CategoryListing;