import '../index.css';
import React, { useContext } from 'react';

//BOOTSTRAP IMPORTS
import ReactTable from 'react-bootstrap/Table';

//IMPORT CONTEXT

import { tableContext } from '../pages/TablePage'

export function Table({
  users: IUserCollection[],
}) {
  {

  }
  const { data } = useContext(tableContext)
  const element =
    <div>
      <h5 className='table--title'>Gestão de Usuários PF</h5>
      <ReactTable striped bordered hover responsive>
        <thead>
        </thead>
        <tbody>
        </tbody>
      </ReactTable>
    </div>

  return element
}

//function Headers(data) {
//  const keys = Object.keys(data)
//  const headers = keys.map((item) =>
//    <tr key={item}>
//      <th scope="col">{item}</th>
//    </tr>
//  );
//  return headers
//}

//function Rows(data) {
//  const rows = data.map((item) =>
//    <tr key={item.id} id={item.id}>
//      <th className='table--colID'>{item.id}</th>
//      <th className='table--colNAME'>{item.name}</th>
//      <th className='table--colCPF'>{item.cpf}</th>
//      <th className='table--action'>
//        <Link to={`edit/${item.id}`}>
//          <i className="fa fa-pencil-square-o"></i>
//        </Link>
//      </th>
//      <th className='table--action'>
//        <i className="fa fa-trash"></i>
//      </th>
//    </tr >
//  );
//  return rows
//}

export default Table
