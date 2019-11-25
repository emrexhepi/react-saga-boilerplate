import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/**
 * Components Import
 */
import { Container, Row } from 'reactstrap';

function MainLayout({ children }) {
    return (
        <Container>
            <Row>
                { children }
            </Row>
        </Container>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default withRouter(MainLayout);
