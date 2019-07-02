import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class RegistrationForm extends Component {
    state = {
        registrationForm: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'first-name',
                    label: 'First Name',
                    placeholder: 'Your First Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'last-name',
                    label: 'Last Name',
                    placeholder: 'Your Last Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
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
                    label: 'Password (10+ characters)',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false,
                touched: false
            },
            passwordCheck: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    name: 'password-check',
                    label: 'Confirm Password',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10
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

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid
    }

    handleInputChange = (event, inputId) => {
        const updatedForm = {
            ...this.state.registrationForm
        }

        const updatedFormElement = {
            ...updatedForm[inputId]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.validationCheck(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputId] = updatedFormElement

        let formIsValid = true;
        for (let input in updatedForm) {
            formIsValid = updatedForm[input].valid && formIsValid;
        }

        this.setState({
            registrationForm: updatedForm,
            formIsValid
        });
    }

    handleRegistration = event => {
        event.preventDefault();
        if (this.state.registrationForm.password.value !== this.state.registrationForm.passwordCheck.value) {
            alert('Password fields must match!');
        }
        console.log(`${this.state.registrationForm.firstName.value} ${this.state.registrationForm.lastName.value} ${this.state.registrationForm.username.value} ${this.state.registrationForm.password.value}`);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.registrationForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registrationForm[key]
            });
        }

        let form = (
            <form onSubmit={this.handleRegistration}>
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
                <Button disabled={!this.state.formIsValid}>Register</Button>
            </form>
        );

        return (
            <div className="info-form">
                <h3>Register to join the Medicine Cabinet community!</h3>
                {form}
            </div>
        );
    }
}

export default RegistrationForm;