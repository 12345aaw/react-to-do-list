import React from 'react';
import {BootstrapTable, TableHeaderColumn, InsertButton} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

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

const List = props => (
    <BootstrapTable data = {props.items} selectRow = {selectRow} cellEdit = {cellEdit} keyBoardNav = {keyBoardNav}
        insertRow= {true}>
        <TableHeaderColumn dataField='index' isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='item'>Item</TableHeaderColumn>
    </BootstrapTable>

);

export default List;