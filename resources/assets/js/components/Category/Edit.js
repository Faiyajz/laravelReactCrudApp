import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props){
        super(props);

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.editCancel = this.editCancel.bind(this);

        this.state={
            category:{},
            edit:0
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.category)
        const category = nextProps.category
        const edit = nextProps.edit
        this.setState({
            category,
            edit
        })
    }

    onChangeCategoryName(e){
        this.setState(
            {
                category:{name:e.target.value}
            }
        );
    }
    editCancel(){
        this.setState({
            edit:0,
            category:{}
        })
    }
    onSubmit(e){
        e.preventDefault();
        const category ={
            name:this.state.category.name
        }

        axios.post('/api/category/store',category)
            .then(response=>console.log(response.data))
    }

    render() {
        if(this.state.edit){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Category Name</label>
                            <input type="te xt"
                                   className="form-control"
                                   id={this.state.category.id?this.state.category.id:""}
                                   value={this.state.category.name?this.state.category.name:""}
                                   onChange = {this.onChangeCategoryName}
                                   placeholder="Edit Category Name"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button className="btn btn-danger" onClick={this.editCancel}>Cancel</button>
                    </form>
                </div>
            );
        }
        else{
            return(
                <div></div>
            )
        }

    }
}

