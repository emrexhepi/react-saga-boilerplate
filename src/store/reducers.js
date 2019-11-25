/**
 * Modules Import
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

/**
 * Reducers Import
 */
import exampleReducer from 'sagas/app/exampleSaga';

const createReducer = (injectedReducers = {}, history) => {
    const rootReducer = combineReducers({
        app: combineReducers(
            {
                // app reducers go here
                exampleReducer
            }
        ),
        router: connectRouter(history),
        ...injectedReducers,
    });

    return rootReducer;
};

export default createReducer;
