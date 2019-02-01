import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

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
                {cabinetStrains}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.strainData.userStrains.strains);
    return {
        userStrains: state.strainData.userStrains,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Cabinet));
