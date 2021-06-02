import React from 'react'
import AuthService from '../services/AuthService'

export interface LoginPageProps {}

export interface LoginPageState {
    email: string
    password: string
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
    authService: AuthService

    constructor(props: LoginPageProps | Readonly<LoginPageProps>) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.authService = new AuthService()
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
    }

    private updateEmail(email: string) {
        this.setState({
            email: email,
        })
    }

    private updatePassword(password: string) {
        this.setState({
            password: password,
        })
    }

    private submitLogin() {
        this.authService.signin(this.state.email, this.state.password)
    }

    render() {
        return (
            <div>
                <div className="border-2 border-gray-light w-32">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(event) =>
                            this.updateEmail(event.target.value)
                        }
                    />
                </div>
                <div className="border-2 border-gray-light w-32">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(event) =>
                            this.updatePassword(event.target.value)
                        }
                    />
                </div>
                <button type="submit" onClick={() => this.submitLogin()}>
                    Login
                </button>
            </div>
        )
    }
}

export default LoginPage
