import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class RegistrationForm extends Component {
    state = {
        form: {
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
                    minLength: 10,
                    shouldMatch: true
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

        if (rules.shouldMatch) {
            isValid = value === this.state.form.password.value && isValid;
        }

        return isValid
    }

    handleInputChange = (event, inputId) => {
        const updatedForm = {
            ...this.state.form
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
            form: updatedForm,
            formIsValid
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(`${this.state.form.firstName.value} ${this.state.form.lastName.value} ${this.state.form.username.value} ${this.state.form.password.value}`);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        let form = (
            <form onSubmit={this.handleSubmit}>
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
                <h3 className="form-heading">Register to join the Medicine Cabinet community!</h3>
                {form}
            </div>
        );
    }
}

export default RegistrationForm;