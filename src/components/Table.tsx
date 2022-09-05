import '../index.css'
import ReactTable from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import React from 'react';
import { iUserTableState } from './interfaces/tableState.interface';

export class Table<T> extends React.Component<{ data: any[] }, iUserTableState<T[]>> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: props.data
        }
    }

    componentDidMount(): void {
        this.setState({ data: this.props.data })
    }

    static getDerivedStateFromProps(nextProps: any, prevState: any): any {
        if (nextProps.data !== prevState.data)
            return {
                data: nextProps.data
            }
        return prevState
    }

    render(): JSX.Element {
        const headers = this.getTableHeaders(this.state.data);
        const content = this.getTableRows(this.state.data);
        return (
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
        )
    }

    getTableHeaders(data: any[]) {
        let tableHeaders: JSX.Element[] = [];
        for (const propertyKey in data[0]) {
            tableHeaders.push(
                <th scope="col" key={propertyKey}>{propertyKey.toUpperCase()}</th>
            );
        }
        return tableHeaders;
    }

    getTableRows(data: any[]) {
        let tableRows: JSX.Element[] = [];

        if (Array.isArray(data))
            data.forEach((item): void => {
                tableRows.push(this.createRow(item))
            });
        else
            return this.createRow(data)
        return tableRows;
    }

    createRow(item: any): JSX.Element {
        const link = "/app/edit/" + item.id;
        return (
            <tr key={item.id} id={item.id.toString()}>
                <th className='table--colID'>   {item.id}   </th>
                <th className='table--colNAME'> {item.name} </th>
                <th className='table--colCPF'>  {item.cpf}  </th>
                <th className='table--colEMAIL'>  {item.email}  </th>
                <th className='table--action'>
                    <Link to={link}>
                        <i className="fa fa-pencil-square-o"></i>
                    </Link>
                </th>
                <th className='table--action' >
                    <i className="fa fa-trash"></i>
                </th>
            </tr>
        )
    }
}
