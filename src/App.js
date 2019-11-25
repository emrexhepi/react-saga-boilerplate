import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

/**
 * Layouts import
 */
import MainLayout from 'layouts/MainLayout';

/**
 * Pages Import
 */
import {
    Home
} from 'pages';

function App({ history }) {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <MainLayout>
                    <Route exact path="/" component={(props) => (<Home {...props} />)} />
                </MainLayout>
            </Switch>
        </ConnectedRouter>
    );
}

App.propTypes = {
    history: PropTypes.object.isRequired
};

export default App;
