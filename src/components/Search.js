import '../index.css'
import React from 'react';

//BOOTSTRAP IMPORTS
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Search(props) {
  const element =
    <Form>
      <h5 className='table--title'>Pesquisar</h5>
      <Form.Group className="form--container" >
        <Form.Control type="text" placeholder="CPF" id="SearchCPF" />
        <Button variant="primary" onClick={props.function} >
          Pesquisar
        </Button>
      </Form.Group>
    </Form>
  return element
}

export default Search
