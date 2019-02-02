import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class EditStrainPage extends React.Component {
    render() {
        return (
            <div>
                <p>Edit a strain here</p>
            </div>
        );
    }
}

export default requiresLogin()(connect()(EditStrainPage));