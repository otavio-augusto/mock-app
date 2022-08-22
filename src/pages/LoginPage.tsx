import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { getAuth } from '../api/auth'
export const LoginPage = () => {
    const navigate = useNavigate();

    const clearFields = () => {
        (document.getElementById('loginEmail') as HTMLInputElement).value = "";
        (document.getElementById('loginSenha') as HTMLInputElement).value = "";
    }

    const login = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        const username = (document.getElementById('loginEmail') as HTMLInputElement).value;
        const password = (document.getElementById('loginSenha') as HTMLInputElement).value;
        try {
            console.log(await getAuth(username, password))
            alert("LOGIN TERMINADO")
            sessionStorage.setItem('username', username)
            navigate('/app/table');
        } catch (err) {
            alert("ERROR!")
            console.log(err)
        }
    }

    return (
        <div className='cadastro--div'>
            <Form className='cadastro--form' onSubmit={login}>
                <h4 className='cadastro--title'>Login</h4>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" id='loginEmail' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" id='loginSenha' />
                </Form.Group>
                <ButtonGroup>
                    <Button variant="primary" type="submit">Entrar</Button>
                    <Button variant="danger" onClick={clearFields}>Limpar</Button>
                </ButtonGroup>
            </Form>
        </div>
    )
}
