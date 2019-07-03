import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class CabinetStrainForm extends Component {
    state = {
        form: {
            id: {
                elementType: 'select',
                elementConfig: {
                    options: this.props.userStrains.map(strain => {
                        return {value: strain.id , display: strain.name}
                    }),
                    name: 'id',
                    label: 'Strain'
                },
                value: this.props.userStrains[0].id
            }
        }
    }

    handleInputChange = event => {
        const updatedForm = {
            ...this.state.form
        }

        const updatedFormElement = {
            ...this.state.form.id
        }
        
        updatedFormElement.value = event.target.value;
        updatedForm.id = updatedFormElement;

        this.setState({
            form: updatedForm
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(`${this.state.form.id.value}`)
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
                        changed={(event) => this.handleInputChange(event)}
                    />
                ))}
                <Button>Add</Button>
            </form>
        );

        return (
            <div className="dropdown-form">
                <h3 className="form-heading">Add a strain to your cabinet!</h3>
                {form}
            </div>
        );
    }
}

export default CabinetStrainForm;