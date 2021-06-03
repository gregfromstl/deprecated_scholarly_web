import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

function Guard(props: any) {
    const user = useSelector((state: any) => state.auth.user)
    if (user && Object.keys(user).length > 0) {
        return props.children
    } else {
        return <Redirect to="/login" />
    }
}

export default Guard
