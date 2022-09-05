import '../index.css'
import { setUser } from '../api/user';
import { UserForm } from './UserForm';
import TitleBar from '../components/TitleBar';
import { validateAuth } from '../api/auth'

export class AddUsers extends UserForm {
    constructor(props: any) {
        super(props)
        this.state = {
            visible: false
        };
    }

    componentDidMount(): void {
        this.verifyAuth()
    }

    handleSubmit(e: { preventDefault: () => void; }): void {
        super.handleSubmit(e)

        const addNewUser = async () => {
            const newUserName = (document.getElementById('formNome') as HTMLInputElement).value
            const newUserCPF = (document.getElementById('formCPF') as HTMLInputElement).value
            const newUserEmail = (document.getElementById('formEmail') as HTMLInputElement).value
            const newUserPassword = (document.getElementById('formSenha') as HTMLInputElement).value
            let newUserAuth
            switch ((document.getElementById('isAdmin') as HTMLInputElement).checked) {
                case true:
                    newUserAuth = 'admin'
                    break;
                default:
                    newUserAuth = 'user'
                    break;
            }

            const content = JSON.stringify({
                "name": newUserName,
                "cpf": newUserCPF,
                "email": newUserEmail,
                "password": newUserPassword,
                "authType": newUserAuth
            });
            await setUser(content)
            alert('Novo usuário cadastrado!')
            super.clearFields()
        }
        addNewUser()
    }

    render(): JSX.Element {
        const parentElement = super.render()
        if (this.state.visible) {
            return (
                <>
                    <TitleBar />
                    <h5 className='page--title'>Cadastro de Clientes</h5>
                    {parentElement}
                </>
            )
        } else
            return (
                <>
                    <h1 className='warning'>Não Autorizado!</h1>
                </>
            )
    }

    clearFields(): void {
        super.clearFields()
    }

    async verifyAuth(): Promise<void> {
        const result = await validateAuth('admin')
        this.setState({ visible: result })
    }


}
