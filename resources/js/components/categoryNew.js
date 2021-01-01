import React, { Component } from 'react';

class CategoryNew extends Component {

    render() {
        return (
            <form>

                <div className="form-group">
                    <label htmlFor="category_name">Category Name</label>
                    <input type="text" className="form-control" id="category_name" placeholder="Enter category" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        );
    }
}

export default CategoryNew;