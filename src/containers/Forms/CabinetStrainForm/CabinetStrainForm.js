import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../../../components/UI/FormElements/Select/Select';
import Button from '../../../components/UI/Button/Button';

class CabinetStrainForm extends Component {
    state = {
        form: {
            id: ''
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
        //add check to see if strain exists in user strains already, display alert
        alert("HEY")
        console.log(`${this.state.form.id}`);
        window.scrollTo(0,0);
    }

    render() {
        let message = null;
        if (this.props.error) {
            message = <p className="error">{this.props.error}</p>
        }

        return (
            <div className="dropdown-form">
                {message}
                <h3 className="form-heading">Add a strain to your cabinet!</h3>
                <form onSubmit={this.handleSubmit}>
                    <Select  
                        name="id"
                        label="Strain"
                        value={this.state.form.id} 
                        changed={(event) => this.handleInputChange(event, "id")}
                        options={this.props.strains.map(strain => {
                            return <option key={strain._id} value={strain._id}>{strain.name}</option>
                        })}
                    />
                    <Button disabled={!this.state.formIsValid}>Add Strain</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    strains: state.strainData.strains,
    error: state.strainData.error
});

export default connect(mapStateToProps)(CabinetStrainForm);