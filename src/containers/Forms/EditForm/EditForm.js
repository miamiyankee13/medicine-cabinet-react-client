import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStrains, editStrain, clearFeedback } from '../../../actions/strains';
import Button from '../../../components/UI/Button/Button';

class EditForm extends Component {
    state = {
        form: {
            id: '',
            name: '',
            type: '',
            flavor: '',
            description: ''
        },
        formIsValid: false
    }

    componentDidMount() {
        this.props.dispatch(fetchStrains());
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
        event.preventDefault();
        const id = this.state.form.id;
        const name = this.state.form.name;
        const type = this.state.form.type;
        const flavor = this.state.form.flavor;
        const description = this.state.form.description;
        this.props.dispatch(editStrain(id, name, type, flavor, description))
            .then(() => {
                this.props.dispatch(fetchStrains());
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
                <div className="input">
                    <label className="label" htmlFor="id">
                        Strain
                    </label>
                    <select 
                        className="input-element" 
                        id="id" 
                        name="id" 
                        value={this.state.form.id} 
                        onChange={(event) => this.handleInputChange(event, "id")}
                    >
                        <option value="">--Select a Strain--</option>
                        {this.props.strains.map(strain => {
                            return <option key={strain._id} value={strain._id}>{strain.name}</option>
                        })}
                    </select>
                </div>
                <div className="input">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="input-element" 
                        id="name" name="name" 
                        type="text" 
                        placeholder="Strain Name" 
                        value={this.state.form.name} 
                        onChange={(event) => this.handleInputChange(event, "name")} 
                    />
                </div>
                <div className="input">
                    <label className="label" htmlFor="type">
                        Type
                    </label>
                    <select 
                        className="input-element" 
                        id="type" name="type"  
                        value={this.state.form.type} onChange={(event) => this.handleInputChange(event, "type")}
                    >
                        <option value="">--Select Type--</option>
                        <option value="Sativa">Sativa</option>
                        <option value="Indica">Indica</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div className="input">
                    <label className="label" htmlFor="flavor">
                        Flavor
                    </label>
                    <input 
                        className="input-element" 
                        id="flavor" name="flavor" 
                        type="text" 
                        placeholder="Strain Flavor" 
                        value={this.state.form.flavor} 
                        onChange={(event) => this.handleInputChange(event, "flavor")} 
                    />
                </div>
                <div className="input">
                    <label className="label" htmlFor="description">
                        Description
                    </label>
                    <input 
                        className="input-element" 
                        id="description" 
                        name="description" 
                        type="text" 
                        placeholder="Strain Description" 
                        value={this.state.form.description} 
                        onChange={(event) => this.handleInputChange(event, "description")} 
                    />
                </div>
                <Button disabled={!this.state.formIsValid}>Edit Strain</Button>
            </form>
        );

        return (
            <section className="info-form">
                {message}
                <h3 className="form-heading">Edit an existing strain!</h3>
                {form}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    strains: state.strainData.strains,
    loading: state.strainData.loading,
    feedback: state.strainData.feedback,
    error: state.strainData.error
});

export default connect(mapStateToProps)(EditForm);