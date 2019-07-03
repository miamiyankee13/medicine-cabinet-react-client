import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import AddForm from './containers/Forms/AddForm/AddForm';
import EditForm from './containers/Forms/EditForm/EditForm';

const App = () => (
    <Fragment>
        <Layout>
            <Switch>
                <Route path="/cabinet" render={() => <h1>Cabinet</h1>} />
                <Route path="/add" component={AddForm} />
                <Route path="/edit" component={EditForm} />
                <Route path="/" render={() => <h1>Landing Page</h1>} />
            </Switch>
        </Layout>
    </Fragment>
);

export default App;