import React from 'react';
import Joi from 'joi-browser';
import Form from "../../../util/form/form";
import {getCurrentUser, login} from "../../../../service/auth/authService";
import {toast} from "react-toastify";
import {Navigate} from "react-router";



class LoginForm extends Form {
    state={
        data:{username: '', password:''},
        errors:{}
    }

    schema = {
        username: Joi
            .string()
            .required()
            .label('Username'),
        password: Joi
            .string()
            .required()
            .min(3)
            .label('Password')
    };

    doSubmit= async ()=> {
        try {
            const {username,password}= this.state.data;
            await login(username,password);

            // redirecting user
            const {state}= this.props.location;
            window.location = state ? state.from.pathname:'/';
        }catch (e) {
            console.log(e);
            if(e.response && e.response.data.status === 401){
                const errors={...this.state.errors};
                errors.username= e.response.data.error;
                toast.error(errors.username);
                this.setState({errors})
            }
        }
    }

    render() {
        // if user already logged in, redirect to home page
        if(getCurrentUser())
            window.location = '/'

        // if user not logged in, show the login form
        return (
            <>
            <div className="container w-25" style={{height:'600px', paddingTop: '100px'}}>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username','Username','')}
                    {this.renderInput('password','Password', '','password')}
                    <hr/>
                    <div className="text-end">
                        {this.renderButton('Login')}
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default LoginForm;
