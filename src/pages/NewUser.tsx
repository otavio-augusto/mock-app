import '../index.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

import { getAllUsers, setUser } from '../api/user'

export function AddUsers() {
  const [isReadyToUpdate, setIsReadyToUpdate] = useState<boolean>(false);
  const forceUpdate = () => setIsReadyToUpdate(!isReadyToUpdate)

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await addNewUser()
    forceUpdate()
  }

  useEffect(() => {
    setUserID()
    async function setUserID(): Promise<void> {
      const result = await getAllUsers();
      (document.getElementById('cadastroID') as HTMLInputElement).value = result.length + 1;
    };
  }, [isReadyToUpdate]); // <- Condições para atualização

  return (
    <div className='cadastro--div'>
      <Form className='cadastro--form' onSubmit={handleSubmit}>
        <h4 className='cadastro--title'>Cadastro de Clientes</h4>
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
        <ButtonGroup>
          <Button variant="primary" type="submit">Cadastrar</Button>
          <Button variant="danger" onClick={clearFields}>Limpar</Button>
        </ButtonGroup>
      </Form>
    </div>
  )
}

function clearFields() {
  (document.getElementById('cadastroNome') as HTMLInputElement).value = "";
  (document.getElementById('cadastroCPF') as HTMLInputElement).value = "";
}

async function addNewUser() {
  const newUserId = (document.getElementById('cadastroID') as HTMLInputElement).value
  const newUserName = (document.getElementById('cadastroNome') as HTMLInputElement).value
  const newUserCPF = (document.getElementById('cadastroCPF') as HTMLInputElement).value
  const content = JSON.stringify({
    "id": newUserId,
    "name": newUserName,
    "cpf": newUserCPF
  });
  await setUser(content)
  alert('Novo usuário cadastrado!')
  clearFields()
}

export default AddUsers
