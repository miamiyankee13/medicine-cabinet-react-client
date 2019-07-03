import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import LoginForm from './containers/Forms/LoginForm/LoginForm';
import RegistrationForm from './containers/Forms/RegistrationForm/RegistrationForm';
import AddForm from './containers/Forms/AddForm/AddForm';
import EditForm from './containers/Forms/EditForm/EditForm';

const App = () => (
    <Fragment>
        <Layout>
            <Switch>
                <Route path="/cabinet" render={() => <h1>Cabinet</h1>} />
                <Route path="/add" component={AddForm} />
                <Route path="/edit" component={EditForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegistrationForm} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Layout>
    </Fragment>
);

export default App;