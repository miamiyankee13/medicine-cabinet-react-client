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

export const FETCH_CURRENT_STRAIN_SUCCESS = 'FETCH_CURRENT_STRAIN_SUCCESS';
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

export const REMOVE_STRAIN_FROM_CABINET_REQUEST = 'REMOVE_STRAIN_FROM_CABINET_REQUEST';
export const removeStrainFromCabinetRequest = () => ({
    type: REMOVE_STRAIN_FROM_CABINET_REQUEST
});

export const REMOVE_STRAIN_FROM_CABINET_SUCCESS = 'REMOVE_STRAIN_FROM_CABINET_SUCCESS';
export const removeStrainFromCabinetSuccess = () => ({
    type: REMOVE_STRAIN_FROM_CABINET_SUCCESS
});

export const REMOVE_STRAIN_FROM_CABINET_ERROR = 'REMOVE_STRAIN_FROM_CABINET_ERROR';
export const removeStrainFromCabinetError = error => ({
    type: REMOVE_STRAIN_FROM_CABINET_ERROR,
    error
})

export const ADD_COMMENT_TO_STRAIN_REQUEST = 'ADD_COMMENT_TO_STRAIN_REQUEST';
export const addCommentToStrainRequest = () => ({
    type: ADD_COMMENT_TO_STRAIN_REQUEST
});

export const ADD_COMMENT_TO_STRAIN_SUCCESS = 'ADD_COMMENT_TO_STRAIN_SUCCESS';
export const addCommentToStrainSuccess = () => ({
    type: ADD_COMMENT_TO_STRAIN_SUCCESS
});

export const ADD_COMMENT_TO_STRAIN_ERROR = 'ADD_COMMENT_TO_STRAIN_ERROR';
export const addCommentToStrainError = error => ({
    type: ADD_COMMENT_TO_STRAIN_ERROR,
    error
});

export const REMOVE_COMMENT_FROM_STRAIN_REQUEST = 'REMOVE_COMMENT_FROM_STRAIN_REQUEST';
export const removeCommentFromStrainRequest = () => ({
    type: REMOVE_COMMENT_FROM_STRAIN_REQUEST
});

export const REMOVE_COMMENT_FROM_STRAIN_SUCCESS = 'REMOVE_COMMENT_FROM_STRAIN_SUCCESS';
export const removeCommentFromStrainSuccess = () => ({
    type: REMOVE_COMMENT_FROM_STRAIN_SUCCESS
});

export const REMOVE_COMMENT_FROM_STRAIN_ERROR = 'REMOVE_COMMENT_FROM_STRAIN_ERROR';
export const removeCommentFromStrainError = error => ({
    type: REMOVE_COMMENT_FROM_STRAIN_ERROR,
    error
});

export const CREATE_STRAIN_REQUEST = 'CREATE_STRAIN_REQUEST';
export const createStrainRequest = () => ({
    type: CREATE_STRAIN_REQUEST
});

export const CREATE_STRAIN_SUCCESS = 'CREATE_STRAIN_SUCCESS';
export const createStrainSuccess = () => ({
    type: CREATE_STRAIN_SUCCESS
});

export const CREATE_STRAIN_ERROR = 'CREATE_STRAIN_ERROR';
export const createStrainError = error => ({
    type: CREATE_STRAIN_ERROR,
    error
})

export const EDIT_STRAIN_REQUEST = 'EDIT_STRAIN_REQUEST';
export const editStrainRequest = () => ({
    type: EDIT_STRAIN_REQUEST
});

export const EDIT_STRAIN_SUCCESS = 'EDIT_STRAIN_SUCCESS';
export const editStrainSuccess = () => ({
    type: EDIT_STRAIN_SUCCESS
});

export const EDIT_STRAIN_ERROR = 'EDIT_STRAIN_ERROR';
export const editStrainError = error => ({
    type: EDIT_STRAIN_ERROR,
    error
});

export const RESET_CURRENT_STRAIN = 'RESET_CURRENT_STRAIN';
export const resetCurrentStrain = () => ({
    type: RESET_CURRENT_STRAIN
});

export const FILTER_USER_STRAINS_REQUEST = 'FILTER_USER_STRAINS_REQUEST';
export const filterUserStrainsRequest = () => ({
    type: FILTER_USER_STRAINS_REQUEST
});

export const FILTER_USER_STRAINS_SUCCESS = 'FILTER_USER_STRAINS_SUCCESS';
export const filterUserStrainsSuccess = data => ({
    type: FILTER_USER_STRAINS_SUCCESS,
    data
});

export const FILTER_USER_STRAINS_ERROR = 'FILTER_USER_STRAINS_ERROR';
export const filterUserStrainsError = error => ({
    type: FILTER_USER_STRAINS_ERROR,
    error
});

export const CLEAR_FEEDBACK = 'CLEAR_FEEDBACK';
export const clearFeedback = () => ({
    type: CLEAR_FEEDBACK
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

export const fetchStrains = () => dispatch => {
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

export const fetchCurrentStrain = id => dispatch => {
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

export const addStrainToCabinet = id => (dispatch, getState) => {
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

export const removeStrainFromCabinet = id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(removeStrainFromCabinetRequest());
    return fetch(`${API_BASE_URL}/users/strains/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(removeStrainFromCabinetSuccess()))
        .catch(err => {
            dispatch(removeStrainFromCabinetError(err))
        })
}

export const addCommentToStrain = (id, content, author) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(addCommentToStrainRequest());
    return fetch(`${API_BASE_URL}/strains/${id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            comment: {
                content,
                author
            }
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(addCommentToStrainSuccess()))
        .catch(err => {
            dispatch(addCommentToStrainError(err))
        })
}

export const removeCommentFromStrain = (id, commentId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(removeCommentFromStrainRequest());
    return fetch(`${API_BASE_URL}/strains/${id}/${commentId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(removeCommentFromStrainSuccess()))
        .catch(err => {
            dispatch(removeCommentFromStrainError(err))
        })
}

export const createStrain = (name, type, flavor, description) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(createStrainRequest());
    return fetch(`${API_BASE_URL}/strains`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            type,
            flavor,
            description
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(createStrainSuccess()))
        .catch(err => {
            dispatch(createStrainError(err))
        })
}

export const editStrain = (id, name, type, flavor, description) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(editStrainRequest());
    return fetch(`${API_BASE_URL}/strains/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            _id: id,
            name,
            type,
            flavor,
            description
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(editStrainSuccess()))
        .catch(err => {
            dispatch(editStrainError(err))
        })
}

export const filterUserStrains = type => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(filterUserStrainsRequest());
    return fetch(`${API_BASE_URL}/users/strains/${type}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(filterUserStrainsSuccess(res)))
        .catch(err => {
            dispatch(filterUserStrainsError(err));
        });
}
