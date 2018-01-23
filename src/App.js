import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//var bootstrap = require('bootstrap');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: [],
            indexCounter: 1,
        };
    }

    

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        var a = {index: this.state.indexCounter, item: this.state.term};
        this.setState({
            indexCounter: this.state.indexCounter + 1,
            term: '',
            items: [...this.state.items, a]
        });
    }    

    render(){
        return(
            <div>
                <div className = "container-fluid">
                    <div className = "well">
                        <form className="App" onSubmit={this.onSubmit}>
                            <h1>To-Do List</h1>
                            <div className = "form-group">
                                <label for = "newBullet">Add new</label>
                                <br/>
                                <input value={this.state.term} onChange={this.onChange} id="newBullet" />
                            </div>
                            <button className = "btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <List items={this.state.items} />
                </div>      

            </div>

        );  
    }
}