import '../index.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { setUser } from '../api/user'
import TitleBar from '../components/TitleBar';

export function AddUsers() {

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await addNewUser()
  }

  return (
    <>
      <TitleBar />
      <div className='cadastro--div'>
        <Form className='cadastro--form' onSubmit={handleSubmit}>
          <h4 className='cadastro--title'>Cadastro de Clientes</h4>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" id='cadastroNome' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" id='cadastroCPF' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" id='cadastroEmail' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" id='cadastroSenha' />
          </Form.Group>
          <ButtonGroup>
            <Button variant="primary" type="submit">Cadastrar</Button>
            <Button variant="danger" onClick={clearFields}>Limpar</Button>
          </ButtonGroup>
        </Form>
      </div>
    </>
  )
}

function clearFields() {
  (document.getElementById('cadastroNome') as HTMLInputElement).value = "";
  (document.getElementById('cadastroCPF') as HTMLInputElement).value = "";
}

async function addNewUser() {
  const newUserName = (document.getElementById('cadastroNome') as HTMLInputElement).value
  const newUserCPF = (document.getElementById('cadastroCPF') as HTMLInputElement).value
  const newUserEmail = (document.getElementById('cadastroEmail') as HTMLInputElement).value
  const newUserPassword = (document.getElementById('cadastroSenha') as HTMLInputElement).value
  const content = JSON.stringify({
    "name": newUserName,
    "cpf": newUserCPF,
    "email": newUserEmail,
    "password": newUserPassword
  });
  await setUser(content)
  alert('Novo usuário cadastrado!')
  clearFields()
}

export default AddUsers
