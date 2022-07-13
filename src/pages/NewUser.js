import '../index.css'
import React, { useEffect, useState } from 'react';

//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { getUser } from '../api/user'

export function AddUsers() {
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
  const forceUpdate = () => setIsReadyToUpdate(!isReadyToUpdate)

  const handleSubmit = e => {
    e.preventDefault()
    forceUpdate()
  }

  const element =
    <Form className='cadastro--form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>ID do Cliente</Form.Label>
        <Form.Control type="number" disabled placeholder='#' id='cadastroID' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>

  useEffect(() => {
    setUserID()
    async function setUserID() {
      const result = await getUser('users')
      document.getElementById('cadastroID').value = result.length
    };
  }, []); // <- Condições para atualização

  return element
}

export default AddUsers
