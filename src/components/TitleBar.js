import '../index.css'
import React from 'react';
import { getUser } from '../api/user'

//BOOTSTRAP IMPORTS
import Button from 'react-bootstrap/Button';

function Title() {
  const element =
    <div>
      <h4 className="bar--title">Aplicativo CRUD Exemplo</h4>
    </div>
  return element
}

function Navigation() {
  const element =
    <nav className='navigation'>
      <Title />
      <ul className='navigation--options'>
        <li>
          <Button variant="primary" onClick={prepareToCreateUser}>
            Novo Usuário
          </Button>
        </li>
      </ul>
    </nav>
  return element
}

function TitleBar() {
  const element =
    <div className="bar">
      <Navigation />
    </div>
  return element
}

function prepareToCreateUser() {
  getUser("users").then(
    data => prepareFields(data)
  )
}

function prepareFields(data) {
  document.getElementById("ID").value = data.length + 1
  document.getElementById("NAME").value = ""
  document.getElementById("CPF").value = ""
}

export default TitleBar;
