import React from 'react';
import Loadable from 'react-loadable';

/**
 * Components Import
 */
import { Spinner } from 'reactstrap';

/**
 * Home Pages
 */
export const Home = Loadable({
    loader: () => import('pages/Home/HomePage'),
    loading: () => (<Spinner type="primary" />)
});
