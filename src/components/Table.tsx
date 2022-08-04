import '../index.css';
import { Link } from "react-router-dom";
import ReactTable from 'react-bootstrap/Table';
import { IUserCollection, UserTableProps } from './interfaces/userCollection.interface';
import { useEffect } from 'react';
import { removeUser } from '../api/user'

export function Table(props: { data: UserTableProps; updateTable: () => void; }) {
  const headers = getTableHeaders(props.data.users);
  const content = getTableRows(props.data.users, props.updateTable);

  useEffect(() => {
    console.log("TABLE UPDATE")
  }, [props.data]);

  return (
    <div>
      <h5 className='table--title'>Gestão de Usuários PF</h5>
      <ReactTable striped bordered hover responsive>
        <thead>
          <tr key={"headers"}>
            {headers}
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </ReactTable>
    </div>
  );
}

function getTableHeaders(data: IUserCollection[]) {
  let tableHeaders: JSX.Element[] = [];
  for (const propertyKey in data[0]) {
    tableHeaders.push(
      <th scope="col" key={propertyKey}>{propertyKey.toUpperCase()}</th>
    );
  }
  return tableHeaders;
}

function getTableRows(data: IUserCollection[], forceUpdate: () => void) {

  const removeRow = async (event: { currentTarget: { parentNode: any; }; }) => {
    const element = event.currentTarget.parentNode;
    await removeUser(element.id)
    forceUpdate()
  }

  let tableRows: JSX.Element[] = [];
  for (let count = 0; count < data.length; count++) {
    const link = "/edit/" + data[count].id;
    tableRows.push(
      <tr key={data[count].id} id={data[count].id.toString()}>
        <th className='table--colID'> {data[count].id}   </th>
        <th className='table--colNAME'> {data[count].name} </th>
        <th className='table--colCPF'> {data[count].cpf}  </th>
        <th className='table--action'>
          <Link to={link}>
            <i className="fa fa-pencil-square-o"></i>
          </Link>
        </th>
        <th className='table--action' onClick={removeRow}>
          <i className="fa fa-trash"></i>
        </th>
      </tr>
    );
    //console.log(tableRows[count])
  }
  return tableRows;
}
