import React from 'react';
import { connect } from 'react-redux'

export class StrainOptions extends React.Component {
    render() {
        
        const strainOptions = this.props.strains.map((strain, index) => {
            return (
                <option key={`strain-${index}`} value={index}>{strain.name}</option>
            )
        });

        return strainOptions
    }
}

const mapStateToProps = (state) => ({
    strains: state.strainData.strains
})

export default connect(mapStateToProps)(StrainOptions);