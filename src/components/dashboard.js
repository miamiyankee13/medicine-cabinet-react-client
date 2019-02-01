import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import requiresLogin from './requires-login';
import Cabinet from './cabinet';
import CreateStrain from './create-strain';
import EditStrain from './edit-strain';

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.userName}!</p>
                <Switch>
                    <Route path="/dashboard/cabinet" component={Cabinet}/>
                    <Route path="/dashboard/create" component={CreateStrain}/>
                    <Route path="/dashboard/edit" component={EditStrain}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userName: state.auth.currentUser.userName,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));