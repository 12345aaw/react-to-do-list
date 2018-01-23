import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import AddForm from './AddForm';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//var bootstrap = require('bootstrap');

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            items: [],
            indexCounter: 1,
        };
    }

    onChange = (event) => {
        this.setState({term:event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        var a = {index: this.state.indexCounter, item: this.state.term};
        this.setState( {
            indexCounter: this.state.indexCounter + 1,
            term: '',
            items: [...this.state.items, a]
        });
    }   

    render(){
        return(
            <div>
                <AddForm items = {this.state} onChange = {this.onChange} onSubmit = {this.onSubmit} />
                <List items = {this.state.items} />
            </div>      
        );  
    }
}