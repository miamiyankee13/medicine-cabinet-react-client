import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterUserStrains, fetchUserStrains } from '../../../actions/strains';
import Select from '../../../components/UI/FormElements/Select/Select';
import Button from '../../../components/UI/Button/Button';

class CabinetFilterForm extends Component {
    state = {
        form: {
            type: ''
        },
        formIsValid: false,
        typeOptions: ['Sativa', 'Indica', 'Hybrid', 'All']
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
        const type = this.state.form.type;
        if (type === 'All') {
            this.props.dispatch(fetchUserStrains())
                .then(() => {
                    this.setState({
                        form: {
                            type: ''
                        },
                        formIsValid: false,
                        message: null
                    });
                });
        } else {
            this.props.dispatch(filterUserStrains(type))
                .then(() => {
                    this.setState({
                        form: {
                            type: ''
                        },
                        formIsValid: false,
                        message: null
                    });
                });
        }
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="dropdown-form">
                <h3 className="form-heading">Filter strains by type!</h3>
                <form onSubmit={this.handleSubmit}>
                    <Select 
                        name="type"
                        label="Type"
                        value={this.state.form.type}
                        changed={(event) => this.handleInputChange(event, "type")}
                        options={this.state.typeOptions.map(option => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    />
                    <Button disabled={!this.state.formIsValid}>Filter</Button>
                </form>
            </div>
        );
    }
}

export default connect()(CabinetFilterForm);