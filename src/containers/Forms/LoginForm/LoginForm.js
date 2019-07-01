import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class LoginForm extends Component {
    state = {
        loginForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'username',
                    label: 'Username',
                    placeholder: 'Your Username'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    validationCheck(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid
    }

    handleInputChange = (event, inputId) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        }

        const updatedFormElement = {
            ...updatedLoginForm[inputId]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.validationCheck(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLoginForm[inputId] = updatedFormElement

        let formIsValid = true;
        for (let input in updatedLoginForm) {
            formIsValid = updatedLoginForm[input].valid && formIsValid;
        }

        this.setState({
            loginForm: updatedLoginForm,
            formIsValid
        });
    }

    handleLogin = event => {
        event.preventDefault();
        console.log(`${this.state.loginForm.username.value} ${this.state.loginForm.password.value}`);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let form = (
            <form onSubmit={this.handleLogin}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.handleInputChange(event, formElement.id)}
                    />
                ))}
                <Button disabled={!this.state.formIsValid}>Login</Button>
            </form>
        );

        return (
            <div>
                {form}
            </div>
        );
    }
}

export default LoginForm;