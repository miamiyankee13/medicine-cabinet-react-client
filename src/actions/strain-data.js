import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_USER_STRAINS_REQUEST = 'FETCH_USER_STRAINS_REQUEST';
export const fetchUserStrainsRequest = () => ({
    type: FETCH_USER_STRAINS_REQUEST
});

export const FETCH_USER_STRAINS_SUCCESS = 'FETCH_USER_STRAINS_SUCCESS';
export const fetchUserStrainsSuccess = data => ({
    type: FETCH_USER_STRAINS_SUCCESS,
    data
});

export const FETCH_USER_STRAINS_ERROR = 'FETCH_USER_STRAINS_ERROR';
export const fetchUserStrainsError = error => ({
    type: FETCH_USER_STRAINS_ERROR,
    error
});

export const fetchUserStrains = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchUserStrainsRequest());
    return fetch(`${API_BASE_URL}/users/strains`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res) => dispatch(fetchUserStrainsSuccess(res)))
        .catch(err => {
            dispatch(fetchUserStrainsError(err));
        });
}
