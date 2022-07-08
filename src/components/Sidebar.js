import '../index.css'
import React, { useContext } from 'react';
import { setUser, getUser, patchUser } from '../api/user'

//BOOTSTRAP IMPORTS
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Sidebar(props) {
  const element =
    <>
      <div className='sidebar--header'>
        <h5 className='sidebar--title'>Cadastro/Edição</h5>
      </div>
      <Form>
        <Form.Group className="form--container" >
          <Form.Control className='sidebar--input--id' type="text" placeholder="#" id="ID" disabled />
          <Form.Control className='sidebar--input--name' type="text" placeholder="NAME" id="NAME" />
          <Form.Control className='sidebar--input--cpf' type="text" placeholder="CPF" id="CPF" />
          <Button variant="primary" onClick={() => { postUser(props.update) }}>
            Salvar
          </Button>
        </Form.Group>
      </Form>
    </>
  return element
}

async function isPostOrPatch() {
  const currentID = document.getElementById("ID").value
  const data = await getUser('users');
  return data.length >= currentID ? false : true;
}

function postUser(update) {
  const userId =
    document.getElementById("ID").value
  const userName =
    document.getElementById("NAME").value
  const userCPF =
    document.getElementById("CPF").value

  const content = JSON.stringify({
    "id": userId,
    "name": userName,
    "cpf": userCPF
  });

  console.log(isPostOrPatch())
  isPostOrPatch().then(
    isPost => isPost ?
      setUser(content, userId).then(update()) :
      patchUser(content, userId).then(update())
  )
}

export default Sidebar
