import React, {Component} from 'react';
import axios from 'axios';

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/category')
            .then(response => {
                this.setState({
                    categories: response.data
                })
            })
            .catch(er => console.log("error found"))

        // console.log(this.state)
    }

    render() {
        return (
            <div>
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
                    {
                        this.state.categories.map(category => {
                                return (
                                    <tr key={category.id}>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>{category.active}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>

                                    </tr>
                                )
                            }
                        )
                    }


                    </tbody>
                </table>
            </div>
        );
    }
}

