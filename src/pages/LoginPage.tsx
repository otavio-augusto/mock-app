import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
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
            const status = (await getAuth(username, password)).status
            switch (status) {
                case 200:
                    sessionStorage.setItem('username', username)
                    navigate('/app/table');
                    break;
                case 401:
                    alert("Login ou Senha incorretos, tente novamente!")
            }
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
                <Link to='/signup'>
                    <Button variant="dark">
                        Novo Usuário
                    </Button>
                </Link>
            </Form>
        </div>
    )
}
