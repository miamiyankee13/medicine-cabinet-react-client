import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import requiresLogin from './requires-login';
import CabinetPage from './cabinet-page';
import CreateStrainPage from './create-strain-page';
import EditStrainPage from './edit-strain-page';
import StrainDetailsPage from './strain-details-page';
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
                <p>Strains in Cabinet: {this.props.userStrains.length}</p>
                <Switch>
                    <Route exact path="/dashboard/cabinet" component={CabinetPage}/>
                    <Route exact path="/dashboard/cabinet/:id" component={StrainDetailsPage} />
                    <Route exact path="/dashboard/create" component={CreateStrainPage}/>
                    <Route exact path="/dashboard/edit" component={EditStrainPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userName: state.auth.currentUser.userName,
        userStrains: state.strainData.userStrains
    };
};

export default requiresLogin()(connect(mapStateToProps)(DashboardPage));