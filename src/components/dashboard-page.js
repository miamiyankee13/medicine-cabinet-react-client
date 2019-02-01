import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import requiresLogin from './requires-login';
import Cabinet from './cabinet';
import CreateStrain from './create-strain';
import EditStrain from './edit-strain';
import StrainDetails from './strain-details';
import { fetchUserStrains, fetchStrains } from '../actions/strain-data';

export class DashboardPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStrains());
        this.props.dispatch(fetchUserStrains());
    }
    
    render() {
        return (
            <div>
                <p>Welcome, {this.props.userName}!</p>
                <Switch>
                    <Route exact path="/dashboard/cabinet" component={Cabinet}/>
                    <Route exact path="/dashboard/cabinet/:id" component={StrainDetails} />
                    <Route exact path="/dashboard/create" component={CreateStrain}/>
                    <Route exact path="/dashboard/edit" component={EditStrain}/>
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

export default requiresLogin()(connect(mapStateToProps)(DashboardPage));