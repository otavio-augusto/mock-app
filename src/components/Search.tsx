//BEGIN_IMPORTS
import '../index.css'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//END_IMPORTS

export function Search(props: { setQuery: (arg0: string) => any }) {

  function updateQuery() {
    const term = (document.getElementById('searchTerm') as HTMLInputElement).value
    console.log(term)
    props.setQuery(`users/${term}`)
  }

  return (
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon2">#ID</InputGroup.Text>
      <Form.Control id="searchTerm" type="text" />
      <Button id="searchSubmit" type="submit" onClick={updateQuery}>
        <i className="fa fa-search"></i>
      </Button>
    </InputGroup >
  )
}



export default Search
