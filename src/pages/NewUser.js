import '../index.css'
import React, { useEffect, useState } from 'react';

//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { getUser, setUser } from '../api/user'

export function AddUsers() {
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
  const forceUpdate = () => setIsReadyToUpdate(!isReadyToUpdate)

  const handleSubmit = e => {
    e.preventDefault()
    addNewUser()
  }

  const element =
    <Form className='cadastro--form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>ID do Cliente</Form.Label>
        <Form.Control type="number" disabled placeholder='#' id='cadastroID' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" id='cadastroNome' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="text" id='cadastroCPF' />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>

  useEffect(() => {
    setUserID()
    async function setUserID() {
      const result = await getUser('users')
      document.getElementById('cadastroID').value = result.length + 1
    };
  }, [isReadyToUpdate]); // <- Condições para atualização

  return element
}

async function addNewUser() {
  const newUserId = document.getElementById('cadastroID').value
  const newUserName = document.getElementById('cadastroNome').value
  const newUserCPF = document.getElementById('cadastroCPF').value
  const content = JSON.stringify({
    "id": newUserId,
    "name": newUserName,
    "cpf": newUserCPF
  });
  await setUser(content)
  alert('Novo usuário cadastrado!')
}

export default AddUsers
