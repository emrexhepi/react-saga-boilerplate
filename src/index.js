/**
 * Modules Import
 */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setupAxios } from 'utils/axios';
import configureStore from 'store';
import * as serviceWorker from 'serviceWorker';
import history from 'utils/history';

/**
 * Styles Import
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/main.scss';

/**
 * Components Import
 */
import App from './App';

/**
 * Configuration
 */
// redux store
const initialState = {};
const store = configureStore(initialState, history);

// axios
setupAxios(store);

ReactDOM.render(
    <Suspense>
        <Provider store={store}>
            <App history={history} />
        </Provider>
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
