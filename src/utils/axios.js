import axios from 'axios';
import { API_URL } from 'config';

/**
 * Actions Import
 */
// import { actions as userActions } from 'sagas/app/auth/userSaga';

/**
 * History Import
 */
import history from 'utils/history';

/**
 * Config axios
 */
axios.defaults.baseURL = API_URL;
axios.defaults.config = {
    headers: { 'Content-Type': 'multipart/form-data' }
};

/**
 * Setup axios
 */
export const setupAxios = (store) => {
    // get token
    const token = window.localStorage.getItem('token');

    // if token exists set token
    // dispatch login action
    if (token && token !== '' && token !== 'null') {
        // store.dispatch(userActions.login(token));
    }

    // reqeust intercpetor
    axios.interceptors.request.use(
        config => {
            // config token as default per request
            const _token = window.localStorage.getItem('token');
            if (_token) {
                config.headers.Authorization = `Bearer ${_token}`;
            }
            return config;
        },
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        (response) => {
            // if error: "No permission!"
            // logout & go to login page
            if (response && response.data && response.data.error === 'No permission!') {
                // store.dispatch(userActions.logout());
            }

            return response;
        },
        (error) => {
            const _error = { ...error };

            if (_error.response && _error.response.status === 401) {
                // Unauthorized Request
                // store.dispatch(userActions.logout());
            } else if (_error.response && _error.response.status === 403) {
                // Forbiden Request
                // store.dispatch(forbidenRequest());
            } else if (_error.response && _error.response.status === 404) {
                // route not found
                // store.dispatch(erroredRequest());
                console.error('error 404');
                history.push('/error/404');
            } else if (!_error.response) {
                // route not found
                // store.dispatch(erroredRequest());
                console.error('error 404');
                history.push('/error/404');
            }

            return Promise.reject(_error);
        }
    );
};

export default axios;
