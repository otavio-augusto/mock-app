import '../index.css'
import { setUser } from '../api/user';
import { UserForm } from './UserForm';
import TitleBar from '../components/TitleBar';

export class AddUsers extends UserForm {
    handleSubmit(e: { preventDefault: () => void; }): void {
        super.handleSubmit(e)
        this.addNewUser()
    }

    render(): JSX.Element {
        const parentElement = super.render()
        return (
            <>
                <TitleBar />
                <h5 className='page--title'>Cadastro de Clientes</h5>
                {parentElement}
            </>
        )
    }

    clearFields(): void {
        super.clearFields()
    }

    async addNewUser() {
        const newUserName = (document.getElementById('formNome') as HTMLInputElement).value
        const newUserCPF = (document.getElementById('formCPF') as HTMLInputElement).value
        const newUserEmail = (document.getElementById('formEmail') as HTMLInputElement).value
        const newUserPassword = (document.getElementById('formSenha') as HTMLInputElement).value
        const content = JSON.stringify({
            "name": newUserName,
            "cpf": newUserCPF,
            "email": newUserEmail,
            "password": newUserPassword
        });
        await setUser(content)
        alert('Novo usuário cadastrado!')
        super.clearFields()
    }
}
