import React from 'react';
// import axios from 'axios';
import './Login.css'

class Login extends React.Component{
    render(){
        return(
            <div className='login'>                
                username: <input />
                password: <input />
                <button>Login</button>
            </div>
        )
    }
}

export default Login;