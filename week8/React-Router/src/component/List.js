import React from 'react';
import PersonRow from './PersonRow'
import PersonHeader from './PersonHeader'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function List(props){
    return(
        <Table striped bordered hover>
            <thead>
            <PersonHeader/>
            </thead>
            <tbody>
            {props.list.map(p => <PersonRow person={p} />)}
            </tbody>
        </Table>
    )
}
