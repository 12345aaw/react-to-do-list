import React from 'react';
import {BootstrapTable, TableHeaderColumn, InsertButton} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//Bootstrap Table options
const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
};
const cellEdit = {
    mode: 'click',
    blurToSave: true
};
const keyBoardNav = {
    enterToEdit: true
};

// List instantiation
const List = props => (
    
    <BootstrapTable data = {props.items} selectRow = {selectRow} cellEdit = {cellEdit} keyBoardNav = {keyBoardNav}>
        <TableHeaderColumn dataField='index' isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='item'>Item</TableHeaderColumn>
    </BootstrapTable>

);

export default List;