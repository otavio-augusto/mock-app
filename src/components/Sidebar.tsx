//BEGIN_IMPORTS
import '../index.css'
import { setUser, getUser, patchUser } from '../api/user'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//END_IMPORTS

function Sidebar(props: { update: any; }) {
  return (
    <>
      <div className='sidebar--header'>
        <h5 className='sidebar--title'>Cadastro/Edição</h5>
      </div>
      <Form>
        <Form.Group className="form--container" >
          <Form.Control className='sidebar--input--id' type="text" placeholder="#" id="ID" disabled />
          <Form.Control className='sidebar--input--name' type="text" placeholder="NAME" id="NAME" />
          <Form.Control className='sidebar--input--cpf' type="text" placeholder="CPF" id="CPF" />
          <Button variant="primary" onClick={() => { postUser(props.update) }}>
            Salvar
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

async function isPostOrPatch() {
  const currentID = (document.getElementById("ID") as HTMLInputElement).value
  const data = await getUser('users');
  return data.length >= currentID ? false : true;
}

function postUser(update: () => void) {
  const userId =
    (document.getElementById("ID") as HTMLInputElement).value
  const userName =
    (document.getElementById("NAME") as HTMLInputElement).value
  const userCPF =
    (document.getElementById("CPF") as HTMLInputElement).value

  const content = JSON.stringify({
    "id": userId,
    "name": userName,
    "cpf": userCPF
  });

  sendRequest()

  async function sendRequest() {
    const isPost = await isPostOrPatch()
    switch (isPost) {
      case true:
        await setUser(content); update()
        break;
      case false:
        await patchUser(content, userId); update()
        break;
      default:
        console.log("ERR: ISPOSTORPATCH")
        break;
    }

  }
}

export default Sidebar
