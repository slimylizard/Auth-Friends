import React from 'react';
import { axiosWithAuth } from '../axiosAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials
            }
        })
    }
    login = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                    type='text' 
                    name='username'
                    value={this.state.credentials.login}
                    onChange={this.handleChange}
                    />
                    
                    <input
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}
export default Login;