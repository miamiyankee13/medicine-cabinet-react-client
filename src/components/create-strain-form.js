import React from 'react';
import { createStrain } from '../actions/strain-data';
import { connect } from 'react-redux';

export class CreateStrainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            typeValue: '',
            descriptionValue: '',
            flavorValue: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleFlavorChange = this.handleFlavorChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({
            nameValue: event.target.value
        });
    }

    handleTypeChange(event) {
        this.setState({
            typeValue: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            descriptionValue: event.target.value
        });
    }

    handleFlavorChange(event) {
        this.setState({
            flavorValue: event.target.value
        });
    }
    
    onSubmit(event) {
        event.preventDefault();
        const name = this.state.nameValue;
        const type = this.state.typeValue;
        const description = this.state.descriptionValue;
        const flavor = this.state.flavorValue;
        this.props.dispatch(createStrain(name, type, flavor, description))
            .then(() => this.setState({
                nameValue: '',
                typeValue: '',
                descriptionValue: '',
                flavorValue: ''
            }))
    }

    render() {
        return (
            <form className="create-strain-form" onSubmit={this.onSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.nameValue}
                    onChange={this.handleNameChange}
                    required/>
           
                <label htmlFor="type">Type</label>
                <input 
                    type="text" 
                    id="type" 
                    name="type" 
                    value={this.state.typeValue}
                    onChange={this.handleTypeChange}
                    required/>
                
                <label htmlFor="description">Description</label>
                <textarea 
                    id="strain-description-edit" 
                    name="strain-description-edit" 
                    rows="4" 
                    cols="50"
                    value={this.state.descriptionValue}
                    onChange={this.handleDescriptionChange}
                    required
                    >
                </textarea>

                <label htmlFor="flavor">Flavor</label>
                <input 
                    type="text" 
                    id="flavor" 
                    name="flavor" 
                    value={this.state.flavorValue}
                    onChange={this.handleFlavorChange}
                    required/>

                <button type="submit">Create Strain</button>
            </form>
        );
    }
}

export default connect()(CreateStrainForm);