class AuthService {
    public async signin(email: string, password: string) {
        var data = {
            email: email,
            password: password,
        }
        await fetch(`http://127.0.0.1:8000/signin`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then((res) => res.text())
            .then((text) => console.log(JSON.parse(text)))
    }
}

export default AuthService
