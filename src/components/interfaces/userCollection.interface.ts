export interface IUserCollection {
    id: number;
    name: string;
    cpf: string;
    email: string;
    password?: string;
    authType?: string;
}

export interface UserTableProps {
    users: IUserCollection[];
}
