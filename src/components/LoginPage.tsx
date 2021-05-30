const LoginPage = () => {
    return (
        <div>
            TEST
            <form>
                <label htmlFor="fname">email</label>
                <br />
                <div className="border-2 border-gray-light w-32">
                    <input type="text" id="fname" name="fname" />
                </div>
                <br />
                <label htmlFor="lname">password:</label>
                <br />
                <div className="border-2 border-gray-light w-32">
                    <input type="text" id="lname" name="lname" />
                </div>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage
