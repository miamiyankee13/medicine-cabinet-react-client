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

export const FETCH_STRAINS_REQUEST = 'FETCH_STRAINS_REQUEST';
export const fetchStrainsRequest = () => ({
    type: FETCH_STRAINS_REQUEST
});

export const FETCH_STRAINS_SUCCESS = 'FETCH_STRAINS_SUCCESS';
export const fetchStrainsSuccess = data => ({
    type: FETCH_STRAINS_SUCCESS,
    data
});

export const FETCH_STRAINS_ERROR = 'FETCH_STRAINS_ERROR';
export const fetchStrainsError = error => ({
    type: FETCH_STRAINS_ERROR,
    error
});

export const SET_CURRENT_STRAIN = 'SET_CURRENT_STRAIN';
export const setCurrentStrain = data => ({
    type: SET_CURRENT_STRAIN,
    data
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
        .then(res => dispatch(fetchUserStrainsSuccess(res)))
        .catch(err => {
            dispatch(fetchUserStrainsError(err));
        });
}

export const fetchStrains = () => (dispatch) => {
    dispatch(fetchStrainsRequest());
    return fetch(`${API_BASE_URL}/strains`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchStrainsSuccess(res)))
        .catch(err => {
            dispatch(fetchStrainsError(err));
        })
}