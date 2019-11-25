import produce from 'immer';
import { put, takeLatest } from 'redux-saga/effects';
import creator from 'utils/actionCreator';
import axios from 'utils/axios';

/**
 * External Ations
 */

/**
 * Constants
 */
export const REQUEST = '@app/example/REQUEST';
export const SUCCESS = '@app/example/SUCCESS';
export const FAILURE = '@app/example/FAILURE';
export const SET_LOADING = '@app/example/SET_LOADING';
export const CLEAR = '@app/example/CLEAR';

/**
 * Initial state
 */
const initState = {
    loading: false,
    errorStatus: '',
    counter: 0
};

/**
 * Defualt reducer
 *
 * @param state
 * @param action
 */
const reducer = (state = initState, { payload, ...action }) => (
    produce(state, draft => {
        switch (action.type) {
        case SUCCESS:
            console.info(payload);
            break;
        case FAILURE:
            draft.errorStatus = payload;
            break;
        case SET_LOADING:
            draft.loading = payload;
            break;
        case CLEAR:
            draft.loading = false;
            draft.errorStatus = '';
            break;
        default:
            break;
        }
    })
);
export default reducer;

/**
 * Redux actions
 */
export const actions = {
    request: (data) => creator(REQUEST, data),
    success: (data) => creator(SUCCESS, data),
    failure: (data) => creator(FAILURE, data)
};

/**
 * Sagas
 */
export const sagas = {
    * request(action) {
        yield console.info(action);

        try {
            yield axios('');
        } catch (e) {
            console.error(e);
            const error = (e.response && e.response.data && e.response.data.message) || 'error: Something went wrong please contact support!';
            yield put(creator(CLEAR));
            yield put(actions.failure(error));
        }
    },
};

/**
 * Saga watchers
 */
export const watcher = function* watch() {
    yield takeLatest(REQUEST, sagas.request);
};
