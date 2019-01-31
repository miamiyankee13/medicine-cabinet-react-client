import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class Cabinet extends React.Component {
    render() {
        return (
            <div>
                <p>This is your cabinet!!!</p>
            </div>
        );
    }
}

export default requiresLogin()(connect()(Cabinet));
