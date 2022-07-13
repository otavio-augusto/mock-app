import '../index.css';
import React, { useState, useEffect, useContext } from 'react';
import { getUser, removeUser } from '../api/user'

//BOOTSTRAP IMPORTS
import ReactTable from 'react-bootstrap/Table';

//IMPORT CONTEXT
import { pageContext } from './Page'

export function Table() {
  const { forceUpdate, query } = useContext(pageContext)
  const [content, setContent] = useState([]);

  const element =
    <div>
      <ReactTable striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </ReactTable>
    </div>

  useEffect(() => {
    updateQuery()
    function updateQuery() {
      getUser(query).then(
        data => setContent(createRows(data, editRow, removeRow))
      )
    }

    const editRow = event => {
      const element = event.currentTarget.parentNode;

      document.getElementById('ID').value =
        element.children[0].innerText
      document.getElementById('NAME').value =
        element.children[1].innerText
      document.getElementById('CPF').value =
        element.children[2].innerText

      forceUpdate()
    };

    const removeRow = async event => {
      const element = event.currentTarget.parentNode;
      await removeUser(element.id)
      forceUpdate()
    };
  }, [query, forceUpdate]); // <- Condições para atualização

  return element
}

function createRows(data, editRow, removeRow) {
  const rows = data.map((item) =>
    <tr key={item.id} id={item.id}>
      <th className='table--colID'>{item.id}</th>
      <th className='table--colNAME'>{item.name}</th>
      <th className='table--colCPF'>{item.cpf}</th>
      <th className='table--action' onClick={editRow}>
        <i className="fa fa-pencil-square-o"></i>
      </th>
      <th className='table--action' onClick={removeRow}>
        <i className="fa fa-trash"></i>
      </th>
    </tr >
  );
  return rows
}

export default Table
