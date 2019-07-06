import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, registerUser } from '../../../actions/auth/auth';
import Input from '../../../components/UI/FormElements/Input/Input';
import Button from '../../../components/UI/Button/Button';

class RegistrationForm extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            passwordCheck: ''
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

        updatedForm[inputId] = event.target.value;

        let formIsValid = true;

        for (let input in updatedForm) {
            formIsValid = updatedForm[input].trim() !== "" && formIsValid;
            if (input === "password" || input === "passwordCheck") {
                formIsValid = updatedForm[input].length > 9 && formIsValid;
            }
        }

        if (inputId === "password") {
            formIsValid = updatedForm[inputId] === this.state.form.passwordCheck && formIsValid;
        } else if (inputId === "passwordCheck") {
            formIsValid = updatedForm[inputId] === this.state.form.password && formIsValid;
        }

        this.setState({
            form: updatedForm,
            formIsValid
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        const username = this.state.form.username;
        const password = this.state.form.password;
        const firstName = this.state.form.firstName;
        const lastName = this.state.form.lastName;
        this.props.dispatch(registerUser(username, password, firstName, lastName))
            .then(() => this.props.dispatch(login(username,password)));
        window.scrollTo(0,0);
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/cabinet" />;
        }

        let message = null;
        if (this.props.error) {
            message = <p className="error">{this.props.error}</p>
        }

        return (
            <section className="info-form">
                {message}
                <h3 className="form-heading">Register to join the Medicine Cabinet community!</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="first-name" 
                        label="First Name" 
                        type="text" 
                        placeholder="First Name"
                        value={this.state.form.firstName}
                        changed={(event) => this.handleInputChange(event, "firstName")} 
                    />
                    <Input 
                        name="last-name" 
                        label="Last Name" 
                        type="text" 
                        placeholder="Last Name"
                        value={this.state.form.lastName}
                        changed={(event) => this.handleInputChange(event, "lastName")} 
                    />
                    <Input 
                        name="username" 
                        label="Username" 
                        type="text" 
                        placeholder="Your Username"
                        value={this.state.form.username}
                        changed={(event) => this.handleInputChange(event, "username")} 
                    />
                    <Input 
                        name="password" 
                        label="Password (10+ characters)" 
                        type="password" 
                        placeholder="Your Password"
                        value={this.state.form.password}
                        changed={(event) => this.handleInputChange(event, "password")} 
                    />
                    <Input 
                        name="password-check" 
                        label="Confirm Password" 
                        type="password" 
                        placeholder="Confirm Password"
                        value={this.state.form.passwordCheck}
                        changed={(event) => this.handleInputChange(event, "passwordCheck")} 
                    />
                    <Button disabled={!this.state.formIsValid}>Register</Button>
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.registrationError
});

export default connect(mapStateToProps)(RegistrationForm);