import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class CreateStrain extends React.Component {
    render() {
        return (
            <div>
                <p>Create a strain here</p>
            </div>
        );
    }
}

export default requiresLogin()(connect()(CreateStrain));