import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Edit from './Edit'

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            category:{},
            edit:0
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

    onEdit(id){
        const category = this.state.categories.filter(category=>{
            return category.id==id
        })[0]
        console.log(category)
        this.setState({
            category,
            edit:1
        })
    }
    render() {
        return (
            <div>
                <Edit category={this.state.category} edit={this.state.edit}/>
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
                                        <td><button onClick={this.onEdit.bind(this,category.id)}>Edit</button> <a href="#" onClick={this.onDelete.bind(this,category.id)}>DELETE</a></td>

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

