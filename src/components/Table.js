import '../index.css';
import React, { useState, useEffect, createContext } from 'react';
import { getUser, removeUser } from '../api/user'

//BOOTSTRAP IMPORTS
import ReactTable from 'react-bootstrap/Table';

//COMPONENT IMPORTS
import Sidebar from './Sidebar'
import Search from './Search'

//CREATING
const crudContext = createContext()

export function Table() {
  //QUERY AND CONTENT USESTATES
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("users");

  //FORCED UPDATE AND CONTEXT
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
  function forceUpdate() { setIsReadyToUpdate(!isReadyToUpdate) }

  const element =
    <div>
      <crudContext.Provider value={forceUpdate}>
        <Search function={updateQuery} />
        <Sidebar update={forceUpdate} />
        <ReactTable striped bordered hover>
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
      </crudContext.Provider>
    </div>

  function updateQuery() {
    const CPF = document.getElementById("SearchCPF").value
    CPF.length === 0 ?
      setQuery(`users`) :
      setQuery(`users?cpf=${CPF}`)
  }

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

      setIsReadyToUpdate(!isReadyToUpdate)
    };

    const removeRow = event => {
      const element = event.currentTarget.parentNode;
      removeUser(element.id).then(
        console.log("Removido!")
      )

      setIsReadyToUpdate(!isReadyToUpdate)
    };
  }, [query, isReadyToUpdate]); // <- Condição para atualização

  return element
}

function createRows(data, editRow, removeRow) {
  const rows = data.map((item) =>
    <tr key={item.id} id={item.id}>
      <th className='table--colID'>{item.id}</th>
      <th className='table--colNAME'>{item.name}</th>
      <th className='table--colCPF'>{item.cpf}</th>
      <th className='table--action' onClick={editRow}>
        Edit
      </th>
      <th className='table--action' onClick={removeRow}>
        Remove
      </th>
    </tr >
  );
  return rows
}

export default Table
