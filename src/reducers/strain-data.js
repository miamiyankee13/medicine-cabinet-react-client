import { 
    FETCH_USER_STRAINS_REQUEST, 
    FETCH_USER_STRAINS_SUCCESS, 
    FETCH_USER_STRAINS_ERROR,
    FETCH_STRAINS_REQUEST,
    FETCH_STRAINS_SUCCESS,
    FETCH_STRAINS_ERROR 
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
                error: action.error
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
                error: action.error
            });

        default:
            return state;
    }
}