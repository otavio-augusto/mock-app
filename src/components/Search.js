import '../index.css'
import React, { useContext } from 'react';

//BOOTSTRAP IMPORTS
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { pageContext } from './Page'

function Search() {
  const { setQuery } = useContext(pageContext)
  const handleSubmit = event => {
    event.preventDefault();
    updateQuery(setQuery)
  }

  const element =
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroup.Text id="btnGroupAddon2">CPF</InputGroup.Text>
        <Form.Control id="searchTerm" type="text" />
        <Button id="searchSubmit" type="submit">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup >
    </Form >

  return element
}


function updateQuery(setQuery) {
  const term = document.getElementById('searchTerm').value
  term.trim() === "" ?
    setQuery('users') :
    setQuery(`users/?cpf=${term}`)
}

export default Search
