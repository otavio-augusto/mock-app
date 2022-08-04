//BEGIN_IMPORTS
import '../index.css'
import { Dispatch, SetStateAction } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//END_IMPORTS

export function Search(props: { setQuery: Dispatch<SetStateAction<string>>; updateTable: () => void; }) {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    updateQuery(props.setQuery)
    props.updateTable()
  }

  return (
    <Form onSubmit={handleSubmit} className='search--form'>
      <InputGroup>
        <InputGroup.Text id="btnGroupAddon2">#ID</InputGroup.Text>
        <Form.Control id="searchTerm" type="text" />
        <Button id="searchSubmit" type="submit">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup >
    </Form >
  )
}

function updateQuery(setQuery: (arg0: string) => any) {
  const term = (document.getElementById('searchTerm') as HTMLInputElement).value
  //console.log(term)
  term.trim() === "" ?
    setQuery('users') :
    setQuery(`users/${term}`)
}

export default Search
