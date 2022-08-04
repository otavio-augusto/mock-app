import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { getUser, patchUser } from '../api/user'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

function EditUser() {
  const { id } = useParams<Record<string, string | undefined>>()

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const userId = (document.getElementById('editID') as HTMLInputElement).value
    const userName = (document.getElementById('editName') as HTMLInputElement).value
    const userCPF = (document.getElementById('editCPF') as HTMLInputElement).value
    const content = JSON.stringify({
      "id": userId,
      "name": userName,
      "cpf": userCPF
    });
    await patchUser(content, id)
    alert("Usuário Atualizado!")
  }

  const getOldData = useCallback(async (id: any) => {
    const { id: newId, name: newName, cpf: newCPF } = (await getUser(`users/${id}`))[0];
    (document.getElementById('editID') as HTMLInputElement).value = newId;
    (document.getElementById('editName') as HTMLInputElement).value = newName;
    (document.getElementById('editCPF') as HTMLInputElement).value = newCPF;
    return [newId, newName, newCPF]
  }, []);

  useEffect(() => {
    getOldData(id)
  }, [getOldData, id]); // <- Condições para atualização

  const element =
    <div className='edit--div'>
      <Form className='edit--form' onSubmit={handleSubmit}>
        <h4 className='edit--title'>Editar Dados</h4>
        <Form.Group className="mb-3">
          <Form.Label>ID do Cliente</Form.Label>
          <Form.Control type="number" disabled placeholder='#' id='editID' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" id='editName' />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" id='editCPF' />
        </Form.Group>
        <ButtonGroup>
          <Button variant="primary" type="submit">Salvar</Button>
          <Button variant="danger" onClick={clearFields}>Limpar</Button>
        </ButtonGroup>
      </Form>
    </div>
  return element
}

function clearFields() {
  (document.getElementById('editName') as HTMLInputElement).value = "";
  (document.getElementById('editCPF') as HTMLInputElement).value = "";
}

export default EditUser
