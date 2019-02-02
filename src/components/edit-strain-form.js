import React from 'react';
import { editStrain } from '../actions/strain-data';
import { connect } from 'react-redux';
import StrainOptions from './strain-options';

export class EditStrainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionValue: '',
            nameValue: '',
            typeValue: '',
            descriptionValue: '',
            flavorValue: ''
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleFlavorChange = this.handleFlavorChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleOptionChange(event) {
        this.setState({
            optionValue: event.target.value
        });
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
        const index = this.state.optionValue;
        const strain = this.props.strains[index]
        const name = this.state.nameValue;
        const type = this.state.typeValue;
        const description = this.state.descriptionValue;
        const flavor = this.state.flavorValue;
        this.props.dispatch(editStrain(strain._id, name, type, flavor, description))
            .then(() => this.setState({
                optionValue: '',
                nameValue: '',
                typeValue: '',
                descriptionValue: '',
                flavorValue: ''
            }))
    }

    render() {
        return (
            <form className="edit-strain-form" onSubmit={this.onSubmit}>

                <label htmlFor="strain-edit">Strain</label>
                <select id="strain-edit" onChange={this.handleOptionChange}>
                    <option value="">--Select a Strain--</option>
                    <StrainOptions />
                </select>
                
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

                <button type="submit">Edit Strain</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        strains: state.strainData.strains
    };
};

export default connect(mapStateToProps)(EditStrainForm);