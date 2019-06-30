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
        axios.get('/api/category')
            .then(response => {
                this.setState({
                    categories: response.data
                })
            })
            .catch(er => console.log("error found"))

        // console.log(this.state)
    }

    onDelete(category_id){
        axios.delete('/api/category/delete/'+category_id)
            .then(response=>{
                this.componentDidMount()
            })

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
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.categories.map(category => {
                                return (
                                    <tr key={category.id}>
                                         <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>{category.active==1?("Active"):("Inactive")}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                        <td><a href="#" onClick={this.onDelete.bind(this,category.id)}>DELETE</a></td>

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

