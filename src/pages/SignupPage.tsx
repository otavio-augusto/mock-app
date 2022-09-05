import '../index.css'
import { unsafeSetUser } from '../api/user';
import { UserForm } from './UserForm';

export class SignupPage extends UserForm {
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
            unsafeSetUser(content)
            alert('Novo usuário cadastrado!');
        }
        addNewUser()
    }

    render(): JSX.Element {
        const parentElement = super.render()
        return (
            <>
                <h5 className='page--title'>Cadastro Inicial</h5>
                {parentElement}
            </>
        )
    }

    clearFields(): void {
        super.clearFields()
    }

}
