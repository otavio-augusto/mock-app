export interface IUserCollection {
    id: number;
    name: string;
    cpf: string;
}

export interface UserTableProps {
    users: IUserCollection[];

}
