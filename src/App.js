import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { refreshAuthToken } from './actions/auth/auth';
import Layout from './containers/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import LoginForm from './containers/Forms/LoginForm/LoginForm';
import RegistrationForm from './containers/Forms/RegistrationForm/RegistrationForm';
import AddForm from './containers/Forms/AddForm/AddForm';
import EditForm from './containers/Forms/EditForm/EditForm';
import CabinetPage from './containers/CabinetPage/CabinetPage';
import StrainPage from './containers/StrainPage/StrainPage';

class App extends Component {

    //if logged in, refresh the auth token periodically
    //stop refreshing when we log out
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Fragment>
                <Layout>
                    <Switch>
                        <Route path="/cabinet/:id" component={StrainPage} />
                        <Route path="/cabinet" component={CabinetPage} />
                        <Route path="/add" component={AddForm} />
                        <Route path="/edit" component={EditForm} />
                        <Route path="/login" component={LoginForm} />
                        <Route path="/register" component={RegistrationForm} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </Layout>
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));