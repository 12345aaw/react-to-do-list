import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const List = props => (
    <BootstrapTable data = {props.items}>
        <TableHeaderColumn dataField='index' isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='item'>hello</TableHeaderColumn>
    </BootstrapTable>

);

export default List;