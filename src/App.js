import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

/**
 * Layouts import
 */
import MainLayout from 'layouts/MainLayout';

/**
 * Components import
 */
import { Col } from 'reactstrap';

function App({ history }) {
    return (
        <ConnectedRouter history={history}>
            <MainLayout>
                <Col xs="12">
                    <h2>Here goes the Content!</h2>
                </Col>
            </MainLayout>
        </ConnectedRouter>
    );
}

App.propTypes = {
    history: PropTypes.object.isRequired
};

export default App;
