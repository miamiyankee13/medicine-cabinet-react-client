import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class CabinetFilterForm extends Component {
    state = {
        form: {
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
                value: 'Sativa'
            }
        }
    }

    handleInputChange = event => {
        const updatedForm = {
            ...this.state.form
        }

        const updatedFormElement = {
            ...this.state.form.type
        }
        
        updatedFormElement.value = event.target.value;
        updatedForm.type = updatedFormElement;

        this.setState({
            form: updatedForm
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(`${this.state.form.type.value}`);
        window.scrollTo(0,0);
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
                <Button>Filter</Button>
            </form>
        );

        return (
            <div className="dropdown-form">
                <h3 className="form-heading">Filter strains by type!</h3>
                {form}
            </div>
        );
    }
}

export default CabinetFilterForm;