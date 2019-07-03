import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class EditForm extends Component {
    state = {
        form: {
            id: {
                elementType: 'select',
                elementConfig: {
                    options: this.props.strains.map(strain => {
                        return {value: strain.id , display: strain.name}
                    }),
                    name: 'id',
                    label: 'Strain'
                },
                value: this.props.strains[0].id,
                validation: {},
                valid: true
            },
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'name',
                    label: 'Name',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            type: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Sativa', display: 'Sativa' },
                        { value: 'Indica', display: 'Indica'},
                        { value: 'Hybrid', display: 'Hybrid'}
                    ],
                    name: 'type',
                    label: 'Type',
                },
                value: 'Sativa',
                validation: {},
                valid: true
            },
            flavor: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'flavor',
                    label: 'Flavor',
                    placeholder: 'Flavor'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            description: {
                elementType: 'text-area',
                elementConfig: {
                    type: 'text',
                    name: 'description',
                    label: 'Description',
                    placeholder: 'Description'
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
        console.log(`${this.state.form.id.value} ${this.state.form.name.value} ${this.state.form.type.value} ${this.state.form.flavor.value} ${this.state.form.description.value}`);
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
                <Button disabled={!this.state.formIsValid}>Edit Strain</Button>
            </form>
        );

        return (
            <div className="info-form">
                <h3>Edit an existing strain!</h3>
                {form}
            </div>
        );
    }
}

export default EditForm;