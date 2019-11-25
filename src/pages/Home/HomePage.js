import React from 'react';
// import PropTypes from 'prop-types';

/**
 * Components import
 */
import { Col } from 'reactstrap';

/**
 * Styles Import
 */
import classes from './HomePage.module.scss';

function Home() {
    return (
        <Col xs="12" className={classes.HomePage}>
            <h2>Here goes the Content!</h2>
        </Col>
    );
}

// Home.propTypes = {

// };

export default Home;
