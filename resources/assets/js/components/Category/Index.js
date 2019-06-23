import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from "./Add";
import Listing from "./Listing";

export default class Index extends Component {
    render() {
        return (

            <div>
                <Router>
                    <div>
                        <Link to="/Category">Listing</Link>
                        <Link to="/Category/Add">Add</Link>

                        <Route exact path="/category" component={Listing}/>
                        <Route exact path="/category/add" component={Add}/>
                    </div>
                </Router>
            </div>
        );
    }
}

