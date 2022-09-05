import '../index.css'
import React from 'react';
import TitleBar from '../components/TitleBar';
import { Table } from '../components/Table';
import { getUser } from '../api/user'
import Search from '../components/Search';
import { IUserCollection } from '../components/interfaces/userCollection.interface';

export class TablePage extends React.Component<{}, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            data: [],
            query: 'users'
        }
        this.updateQuery = this.updateQuery.bind(this)
    }

    getUserData = async () => {
        const users = await getUser(this.state.query)
        if (Array.isArray(users))
            users.map((item: IUserCollection) => {
                this.removeSensitiveColumns(item)
            });
        else
            this.removeSensitiveColumns(users)
        this.setState({
            data: users,
            query: this.state.query
        })
    }

    removeSensitiveColumns(item: IUserCollection) {
        delete item.password
        delete item.authType
        return item
    }

    updateQuery(newQuery: string): void {
        this.setState({
            query: newQuery,
            data: this.state.data
        })
    }

    componentDidMount(): void {
        this.getUserData()
    }
    componentDidUpdate(_prevProps: any, prevState: any): void {
        if (prevState.query !== this.state.query)
            this.getUserData()
    }

    render(): JSX.Element {
        if (this.state.data.length === 0)
            return (
                <>
                    <h5>Carregando...</h5>
                </>
            )
        return (
            <>
                <TitleBar />
                <Search setQuery={this.updateQuery} />
                <Table data={this.state.data} />
            </>
        )
    }
}
