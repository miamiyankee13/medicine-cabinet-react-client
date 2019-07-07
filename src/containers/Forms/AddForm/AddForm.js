import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStrain, clearFeedback } from '../../../actions/strains';
import requiresLogin from '../../../hoc/requiresLogin/requiresLogin';
import Input from '../../../components/UI/FormElements/Input/Input';
import Select from '../../../components/UI/FormElements/Select/Select';
import Button from '../../../components/UI/Button/Button';

class AddForm extends Component {
    state = {
        form: {
            name: '',
            type: '',
            flavor: '',
            description: ''
        },
        formIsValid: false,
        typeOptions: ['Sativa', 'Indica', 'Hybrid']
    }

    componentWillUnmount() {
        this.props.dispatch(clearFeedback());
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
        const name = this.state.form.name;
        const type = this.state.form.type;
        const flavor = this.state.form.flavor;
        const description = this.state.form.description;
        this.props.dispatch(createStrain(name, type, flavor, description))
            .then(() => {
                this.setState({
                    form: {
                        name: '',
                        type: '',
                        flavor: '',
                        description: ''
                    } 
                });
            });
        window.scrollTo(0,0);
    }

    render() {
        let message = null;
        if (this.props.error) {
            message = <p className="error">{this.props.error}</p>
        }

        if (this.props.feedback) {
            message = <p className="success">{this.props.feedback}</p>
        }

        return (
            <section className="info-form" aria-live="polite">
                {message}
                <h3 className="form-heading">Add a new strain!</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="name"
                        label="Name"
                        type="text"
                        placeholder="Strain Name"
                        value={this.state.form.name}
                        changed={(event) => this.handleInputChange(event, "name")}
                    />
                    <Select 
                        name="type"
                        label="Type"
                        value={this.state.form.type}
                        changed={(event) => this.handleInputChange(event, "type")}
                        options={this.state.typeOptions.map(option => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    />
                    <Input 
                        name="flavor"
                        label="Flavor"
                        type="text"
                        placeholder="Strain Flavor"
                        value={this.state.form.flavor}
                        changed={(event) => this.handleInputChange(event, "flavor")}
                    />
                    <Input 
                        name="description"
                        label="Description"
                        type="text"
                        placeholder="Strain Description"
                        value={this.state.form.description}
                        changed={(event) => this.handleInputChange(event, "description")}
                    />
                    <Button disabled={!this.state.formIsValid}>Add Strain</Button>
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    feedback: state.strainData.feedback,
    error: state.strainData.error
});

export default requiresLogin()(connect(mapStateToProps)(AddForm));