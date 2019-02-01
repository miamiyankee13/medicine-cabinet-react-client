import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class Cabinet extends React.Component {
    render() {
        
        const userStrainList = this.props.userStrains.map((strain, index) => {
            return (
                <li key={`strain-${index}`}>{strain.name}</li>
            )
        });

        return (
            <div>
                <ul>{userStrainList}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userStrains: state.auth.currentUser.strains,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Cabinet));
