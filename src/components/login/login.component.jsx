import React from 'react';
import {Button} from '@material-ui/core';

import './login.style.css';

import { auth, provider } from '../../firebase/firebase';

function Login (){
    const signInUsingGoogle = () => {
        auth.signInWithPopup(provider).then(result => 
            console.log(result)
        ).catch(err => alert(err.message));
    }

    return(
        <div className="login">
            <div className="login__container">
                <img src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png"
                 alt="whatsapp logo" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signInUsingGoogle} >
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
}

export default Login;