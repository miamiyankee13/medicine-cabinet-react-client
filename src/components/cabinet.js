import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import StrainDropdown from './strain-dropdown';

export class Cabinet extends React.Component {
    render() {
        if (!this.props.userStrains) {
            return null;
        }

        const cabinetStrains = this.props.userStrains.map((strain, index) => {
            return (
                <div key={`strain-${index}`} data-index={index}>{strain.name}</div>
            )
        });

        return (
            <div>
                <StrainDropdown />
                <p>Strains in Cabinet: {cabinetStrains.length}</p>
                <div className="flex-cabinet">
                    {cabinetStrains}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userStrains: state.strainData.userStrains
    };
};

export default requiresLogin()(connect(mapStateToProps)(Cabinet));
