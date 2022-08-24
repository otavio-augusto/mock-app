import '../index.css'
import { setUser } from '../api/user';
import { UserForm } from './UserForm';

export class SignupPage extends UserForm {
    handleSubmit(e: { preventDefault: () => void; }): void {
        super.handleSubmit(e)
        this.addNewUser()
    }

    render(): JSX.Element {
        return super.render()
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
