import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class StrainDropdown extends React.Component {
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
                    <select id="strain-select">
                        <option value="">--Select a Strain--</option>
                        {strainOptions}
                    </select>
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