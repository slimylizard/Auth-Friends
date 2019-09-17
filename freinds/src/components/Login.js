import { axiosWithAuth } from './axiosAuth';

const Login = () => {
    login = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('/login', userCredentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
        })
    }
}

export default Login;