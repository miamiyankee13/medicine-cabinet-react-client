import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';

const App = () => (
    <Fragment>
        <Layout>
            <Switch>
                <Route path="/cabinet" render={() => <h1>Cabinet</h1>} />
                <Route path="/add" render={() => <h1>Add Strain</h1>} />
                <Route path="/edit" render={() => <h1>Edit Strain</h1>} />
                <Route path="/" render={() => <h1>Landing Page</h1>} />
            </Switch>
        </Layout>
    </Fragment>
);

export default App;