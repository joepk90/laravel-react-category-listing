import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from 'react-js-pagination';

class CategoryListing extends Component {

    constructor() {
        super();

        this.state = {
            categories: [],
            activePage: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 0,
            pageRangeDisplayed: 0
        }
    }

    async getCategories() {

        const categories = await axios.get('http://laravel-react-project.loc/api/category');

        this.setState({
            categories: categories.data.data,
            itemsCountPerPage: categories.data.per_page,
            totalItemsCount: categories.data.total,
            activePage: categories.current_page,
        });
    }

    async handleOnDelete(category_id) {

        const response = await axios.delete('http://laravel-react-project.loc/api/category/delete/' + category_id);

        const categories = this.state.categories.filter(category => category.id !== category_id);

        this.setState({
            categories
        })

    }

    async handlePageChange(pageNumber) {

        const response = await axios.get('http://laravel-react-project.loc/api/category?page=' + pageNumber);

        this.setState({
            categories: response.data.data,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
            activePage: response.current_page,
        });

    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        return (

            <div className="category-listing">

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
                                    <td>
                                        <Link to={"/category/edit/" + category.id}>Edit</Link>
                                        <a href="#" onClick={() => this.handleOnDelete(category.id)}>Delete</a>
                                    </td>
                                </tr>
                            );

                        })}

                    </tbody>
                </table>

                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass="page-item"
                    linkClass="page-link"
                />

            </div>


        );
    }
}

export default CategoryListing;