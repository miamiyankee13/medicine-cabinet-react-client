import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Textarea from '../../../components/UI/FormElements/Textarea/Textarea';
import Button from '../../../components/UI/Button/Button';

class StrainCommentForm extends Component {
    state = {
        form: {
            comment: ''
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
        window.scrollTo(0,0);
    }

    render() {
        if (this.props.loading) {
            return <h3>Loading...</h3>
        }

        let message = null;
        if (this.props.error) {
            message = <p className="error">{this.props.error}</p>
        }

        if (this.props.feedback) {
            message = <p className="success">{this.props.feedback}</p>
        }

        let form = (
            <form onSubmit={this.handleSubmit}>
                <Textarea 
                    name="comment"
                    label="Comment"
                    rows="4"
                    cols="30"
                    placeholder="Comment..."
                    value={this.state.form.comment}
                    changed={(event) => this.handleInputChange(event, "comment")}
                />
                <Button disabled={!this.state.formIsValid}>Add Comment</Button>
            </form>
        );

        return (
            <section className="info-form">
                {message}
                <h3 className="form-heading">Add a comment!</h3>
                {form}
            </section>
        );
    }
}

export default StrainCommentForm;