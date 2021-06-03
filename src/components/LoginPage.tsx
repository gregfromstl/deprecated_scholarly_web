import { useState } from 'react'
import { useDispatch } from 'react-redux'

import AuthService from '../services/AuthService'
import { signin } from '../redux/reducers/AuthReducer'
import { useHistory } from 'react-router'

function LoginPage() {
    const authService = new AuthService()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div>
            <div className="border-2 border-gray-light w-32">
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="border-2 border-gray-light w-32">
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button
                type="submit"
                onClick={async () => {
                    var user = await authService.signin(email, password)
                    dispatch(signin(user))
                    history.push('/')
                }}
            >
                Login
            </button>
        </div>
    )
}

export default LoginPage
