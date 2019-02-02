import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class StrainDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }

        this.handleChange = this.handleChange.bind(this);
        //this.addToCabinet = this.addToCabinet.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    //addToCabinet(event) {
        //event.preventDefault();
        //const index = this.state.value;
        //const strain = this.props.strains[index]
        //this.props.dispatch(addToCabinet(strain._id))
    //}
    

    render() {
        if (!this.props.strains) {
            return null;
        }
        
        const strainOptions = this.props.strains.map((strain, index) => {
            return (
                <option key={`strain-${index}`} value={index}>{strain.name}</option>
            )
        });

        return (
            <div>
                <form>
                    <label htmlFor="strain-select">Select a Strain</label>
                    <select id="strain-select" onChange={this.handleChange}>
                        <option value="">--Select a Strain--</option>
                        {strainOptions}
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
    };
};

export default requiresLogin()(connect(mapStateToProps)(StrainDropdown));