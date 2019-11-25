/**
 * Moduels import
 */
import { all } from 'redux-saga/effects';

/**
 * Watchers improt
 */
import watchers from 'sagas/watchers';

export default function* root() {
    yield all(watchers);
}
