import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LandingPage from './landing-page';
import DashboardPage from './dashboard-page';
import Header from './header';
import RegistrationPage from './registration-page';
import NotFound from './not-found';
import { refreshAuthToken } from '../actions/auth';
import LoginPage from './login-page';
import './app.css';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
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
            <div className="flex-container">
                <Header />
                <br/>
                <div className="flex-bottom">
                <br />
                    <main className="flex-main">
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route path="/dashboard/:section" component={DashboardPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegistrationPage} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                    <footer className="flex-footer">
                        <br />
                        <p>FOR USE BY ADULTS ONLY - AGES 21 & OLDER</p>
                        <br />
                        <p><small>Copyright &copy; 2019 Anthony D'Amico</small></p>
                    </footer>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));