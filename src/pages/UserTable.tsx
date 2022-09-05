import { Table } from "../components/Table";

export class UserTable<IUserCollection> extends Table<IUserCollection>{
    constructor(props: any) {
        super(props)
        this.setState({ data: props.data })
    }

    render(): JSX.Element {
        const parentElement = super.render()
        return (
            <>
                {parentElement}
            </>
        )
    }

    async updateData(): Promise<void> {

    }
}
