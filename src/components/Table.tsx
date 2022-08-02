import '../index.css';
import React from 'react';

//BOOTSTRAP IMPORTS
import ReactTable from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
//IMPORT CONTEXT

import { UserTableProps } from './interfaces/userCollection.interface';

export const Table: React.FC<UserTableProps> = (data: UserTableProps) => {
    const headers = getTableHeaders(data)
    const content = getTableRows(data)
    return (
        <div>
            <h5 className='table--title'>Gestão de Usuários PF</h5>
            <ReactTable striped bordered hover responsive>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </ReactTable>
        </div>
    )
}

function getTableHeaders(data: UserTableProps) {
    let tableHeaders = []
    for (const key in data.users[0]) {
        tableHeaders.push(
            <th scope="col">{key}</th>
        )
    }
    return tableHeaders
}

function getTableRows(data: UserTableProps) {
    let tableRows = []
    for (let count = 0; count < data.users.length; count++) {
        const link = "/edit/:" + data.users[count].id
        tableRows.push(
            <tr key={data.users[count].id} id={data.users[count].cpf}>
                <th className='table--colID'  > {data.users[count].id}   </th>
                <th className='table--colNAME'> {data.users[count].name} </th>
                <th className='table--colCPF' > {data.users[count].cpf}  </th>
                <th className='table--action'>
                    <Link to={link}>
                        <i className="fa fa-pencil-square-o"></i>
                    </Link>
                </th>
                <th className='table--action'>
                    <i className="fa fa-trash"></i>
                </th>
            </tr>
        )
    }
    return tableRows
}

export default Table
