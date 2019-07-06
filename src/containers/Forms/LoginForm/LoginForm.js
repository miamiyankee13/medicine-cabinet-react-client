import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../actions/auth/auth';
import Input from '../../../components/UI/FormElements/Input/Input';
import Button from '../../../components/UI/Button/Button';

class LoginForm extends Component {
    state = {
        form: {
            username: '',
            password: ''
        },
        formIsValid: false
    }

    handleInputChange = (event, inputId) => {
        const updatedForm = {
            ...this.state.form
        }

        updatedForm[inputId] = event.target.value;

        let formIsValid = true;
        for (let input in updatedForm) {
            formIsValid = updatedForm[input].trim() !== "" && formIsValid;
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
        this.props.dispatch(login(username, password));
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
                <h3 className="form-heading">Log in to view your cabinet!</h3>
                <form onSubmit={this.handleSubmit}>
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
                        label="Password" 
                        type="password" 
                        placeholder="Your Password" 
                        value={this.state.form.password} 
                        changed={(event) => this.handleInputChange(event, "password")} 
                    />
                    <Button disabled={!this.state.formIsValid}>Log In</Button>
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.authError
});

export default connect(mapStateToProps)(LoginForm);