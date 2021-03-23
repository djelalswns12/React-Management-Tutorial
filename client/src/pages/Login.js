import React, { useState } from 'react';
import GoogleButton from '../components/GoogleButton'
import logo from '../img/logo.png'

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    function GoMain(e){
        props.history.push({pathname:'/Main',state:{User:e}}) 
    }
    return(
        <>
            <img src={logo} />
            <GoogleButton GoToMain={GoMain} ></GoogleButton>
        </>
    )
}

export default withRouter(Login)