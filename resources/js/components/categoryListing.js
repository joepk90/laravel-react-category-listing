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
                            </tr>
                        );

                    })}

                </tbody>
            </table>
        );
    }
}

export default CategoryListing;