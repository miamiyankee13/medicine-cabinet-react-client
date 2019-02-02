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

export const FETCH_CURRENT_STRAIN_REQUEST = 'FETCH_CURRENT_STRAIN_REQUEST';
export const fetchCurrentStrainRequest = () => ({
    type: FETCH_CURRENT_STRAIN_REQUEST
});

export const FETCH_CURRENT_STRAIN_SUCCESS = 'FETCH_CURRENT_STRAIN';
export const fetchCurrentStrainSuccess = data => ({
    type: FETCH_CURRENT_STRAIN_SUCCESS,
    data
});

export const FETCH_CURRENT_STRAIN_ERROR = 'FETCH_CURRENT_STRAIN_ERROR';
export const fetchCurrentStrainError = error => ({
    type: FETCH_CURRENT_STRAIN_ERROR,
    error
});

export const ADD_STRAIN_TO_CABINET_REQUEST = 'ADD_STRAIN_TO_CABINET_REQUEST';
export const addStrainToCabinetRequest = () => ({
    type: ADD_STRAIN_TO_CABINET_REQUEST,
});

export const ADD_STRAIN_TO_CABINET_SUCCESS = 'ADD_STRAIN_TO_CABINET_SUCCESS';
export const addStrainToCabinetSuccess = () => ({
    type: ADD_STRAIN_TO_CABINET_SUCCESS
});

export const ADD_STRAIN_TO_CABINET_ERROR = 'ADD_STRAIN_TO_CABINET_ERROR';
export const addStrainToCabinetError = error => ({
    type: ADD_STRAIN_TO_CABINET_ERROR,
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

export const fetchCurrentStrain = (id) => (dispatch) => {
    dispatch(fetchCurrentStrainRequest())
    return fetch(`${API_BASE_URL}/strains/${id}`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchCurrentStrainSuccess(res)))
        .catch(err => {
            dispatch(fetchCurrentStrainError(err));
        })
}

export const addStrainToCabinet = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(addStrainToCabinetRequest());
    return fetch(`${API_BASE_URL}/users/strains/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(addStrainToCabinetSuccess()))
        .catch(err => {
            dispatch(addStrainToCabinetError(err))
        })
}