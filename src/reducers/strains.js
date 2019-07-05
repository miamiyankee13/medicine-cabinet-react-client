import { 
    FETCH_USER_STRAINS_REQUEST, 
    FETCH_USER_STRAINS_SUCCESS, 
    FETCH_USER_STRAINS_ERROR,
    FETCH_STRAINS_REQUEST,
    FETCH_STRAINS_SUCCESS,
    FETCH_STRAINS_ERROR, 
    FETCH_CURRENT_STRAIN_REQUEST,
    FETCH_CURRENT_STRAIN_SUCCESS,
    FETCH_CURRENT_STRAIN_ERROR,
    ADD_STRAIN_TO_CABINET_REQUEST,
    ADD_STRAIN_TO_CABINET_SUCCESS,
    ADD_STRAIN_TO_CABINET_ERROR,
    REMOVE_STRAIN_FROM_CABINET_REQUEST,
    REMOVE_STRAIN_FROM_CABINET_SUCCESS,
    REMOVE_STRAIN_FROM_CABINET_ERROR,
    ADD_COMMENT_TO_STRAIN_REQUEST,
    ADD_COMMENT_TO_STRAIN_SUCCESS,
    ADD_COMMENT_TO_STRAIN_ERROR,
    REMOVE_COMMENT_FROM_STRAIN_REQUEST,
    REMOVE_COMMENT_FROM_STRAIN_SUCCESS,
    REMOVE_COMMENT_FROM_STRAIN_ERROR,
    CREATE_STRAIN_REQUEST,
    CREATE_STRAIN_SUCCESS,
    CREATE_STRAIN_ERROR,
    EDIT_STRAIN_REQUEST,
    EDIT_STRAIN_SUCCESS,
    EDIT_STRAIN_ERROR,
    RESET_CURRENT_STRAIN,
    FILTER_USER_STRAINS_REQUEST,
    FILTER_USER_STRAINS_SUCCESS,
    FILTER_USER_STRAINS_ERROR,
    CLEAR_FEEDBACK
} from '../actions/strains';

const initialState = {
    strains: [],
    userStrains: [],
    currentStrain: null,
    loading: false,
    feedback: null,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_STRAINS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FETCH_USER_STRAINS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                userStrains: action.data.strains
            });
        case FETCH_USER_STRAINS_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case FETCH_STRAINS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });
        case FETCH_STRAINS_SUCCESS:
            return Object.assign({}, state, {
                loading: false, 
                strains: action.data.strains
            });
        case FETCH_STRAINS_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case FETCH_CURRENT_STRAIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FETCH_CURRENT_STRAIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                currentStrain: action.data
            });
        case FETCH_CURRENT_STRAIN_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case ADD_STRAIN_TO_CABINET_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case ADD_STRAIN_TO_CABINET_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            })
        case ADD_STRAIN_TO_CABINET_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case REMOVE_STRAIN_FROM_CABINET_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case REMOVE_STRAIN_FROM_CABINET_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });
        case REMOVE_STRAIN_FROM_CABINET_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case ADD_COMMENT_TO_STRAIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case ADD_COMMENT_TO_STRAIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });
        case ADD_COMMENT_TO_STRAIN_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case REMOVE_COMMENT_FROM_STRAIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            })
        case REMOVE_COMMENT_FROM_STRAIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });
        case REMOVE_COMMENT_FROM_STRAIN_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case CREATE_STRAIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case CREATE_STRAIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: 'Strain added!'
            })
        case CREATE_STRAIN_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                error: action.error.message
            })
        case EDIT_STRAIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case EDIT_STRAIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: 'Strain updated!'
            });
        case EDIT_STRAIN_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case RESET_CURRENT_STRAIN:
            return Object.assign({}, state, {
                currentStrain: null
            });
        case FILTER_USER_STRAINS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FILTER_USER_STRAINS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                userStrains: action.data.strains
            });
        case FILTER_USER_STRAINS_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        case CLEAR_FEEDBACK:
            return Object.assign({}, state, {
                feedback: null
            });
        default:
            return state;
    }
}