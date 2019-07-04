import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import strainsReducer from './reducers/strains';
import { loadAuthToken } from './actions/auth/local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        auth: authReducer,
        strainData: strainsReducer
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;