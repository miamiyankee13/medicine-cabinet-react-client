import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class StrainCommentForm extends Component {
    state = {
        form: {
            comment: {
                elementType: 'textarea',
                elementConfig: {
                    name: 'comment',
                    label: 'Comment',
                    placeholder: 'Your Comment',
                    rows: '4',
                    cols: '30'
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

    handleInputChange = (event) => {
        const updatedForm = {
            ...this.state.form
        }

        const updatedFormElement = {
            ...updatedForm.comment
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.validationCheck(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm.comment = updatedFormElement

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
        console.log(`${this.state.form.comment.value}`);
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
                        changed={(event) => this.handleInputChange(event)}
                    />
                ))}
                <Button disabled={!this.state.formIsValid}>Add Comment</Button>
            </form>
        );

        return (
            <div className="info-form">
                <h3 className="form-heading">Add a comment!</h3>
                {form}
            </div>
        );
    }
}

export default StrainCommentForm;