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
    CREATE_STRAIN_REQUEST,
    CREATE_STRAIN_SUCCESS,
    CREATE_STRAIN_ERROR
} from '../actions/strain-data';

const initialState = {
    strains: [],
    userStrains: [],
    currentStrain: null,
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_STRAINS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
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
        case CREATE_STRAIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });
        case CREATE_STRAIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            })
        case CREATE_STRAIN_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                error: action.error.message
            })

        default:
            return state;
    }
}