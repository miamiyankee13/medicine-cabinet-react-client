import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStrains, editStrain, clearFeedback } from '../../../actions/strains';
import requiresLogin from '../../../hoc/requiresLogin/requiresLogin';
import Input from '../../../components/UI/FormElements/Input/Input';
import Select from '../../../components/UI/FormElements/Select/Select';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class EditForm extends Component {
    state = {
        form: {
            id: '',
            name: '',
            type: '',
            flavor: '',
            description: ''
        },
        formIsValid: false,
        typeOptions: ['Sativa', 'Indica', 'Hybrid']
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
        let message = null;
        if (this.props.error) {
            message = <p className="error">{this.props.error}</p>
        }

        if (this.props.feedback) {
            message = <p className="success">{this.props.feedback}</p>
        }

        if (this.props.loading) {
            return <Spinner />;
        }

        return (
            <section className="info-form">
                {message}
                <h3 className="form-heading">Edit an existing strain!</h3>
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
                    <Button disabled={!this.state.formIsValid}>Edit Strain</Button>
                </form>
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

export default requiresLogin()(connect(mapStateToProps)(EditForm));