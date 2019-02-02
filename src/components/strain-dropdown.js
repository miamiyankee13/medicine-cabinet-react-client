import React from 'react';
import { connect } from 'react-redux';
import { addStrainToCabinet, fetchUserStrains } from '../actions/strain-data';
import StrainOptions from './strain-options';

export class StrainDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.addStrain = this.addStrain.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    addStrain(event) {
        event.preventDefault();
        const index = this.state.value;
        const strain = this.props.strains[index]
        const strainExists = this.props.userStrains.find(element => element._id === strain._id)
        if (strainExists) {
            alert('This strain is already in your cabinet');
            return
        }
        this.props.dispatch(addStrainToCabinet(strain._id))
            .then(() => this.props.dispatch(fetchUserStrains()))
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.addStrain}>
                    <label htmlFor="strain-select">Select a Strain</label>
                    <select id="strain-select" onChange={this.handleChange}>
                        <option value="">--Select a Strain--</option>
                        <StrainOptions />
                    </select>
                    <button type="submit">Add Strain</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        strains: state.strainData.strains,
        userStrains: state.strainData.userStrains
    };
};

export default (connect(mapStateToProps)(StrainDropdown));