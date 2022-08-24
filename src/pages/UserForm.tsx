import '../index.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import React from 'react';

export class UserForm extends React.Component {
    handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
    }

    clearFields() {
        (document.getElementById('formNome') as HTMLInputElement).value = "";
        (document.getElementById('formCPF') as HTMLInputElement).value = "";
        (document.getElementById('formEmail') as HTMLInputElement).value = "";
        (document.getElementById('formSenha') as HTMLInputElement).value = "";
    }

    render() {
        return (
            <div className='form--div' >
                <Form className='form--form' onSubmit={this.handleSubmit}>
                    <h4 className='form--title'>Cadastro de Clientes</h4>
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" id='formNome' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" id='formCPF' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" id='formEmail' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" id='formSenha' />
                    </Form.Group>
                    <ButtonGroup>
                        <Button variant="primary" type="submit">Cadastrar</Button>
                        <Button variant="danger" onClick={this.clearFields}>Limpar</Button>
                    </ButtonGroup>
                </Form>
            </div>
        )
    }
}
