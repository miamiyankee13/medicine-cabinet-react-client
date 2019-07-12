import authReducer from '../auth';
import {
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError,
    registrationError
} from '../../actions/auth/auth';

describe('authReducer', function() {
    const initialState = {
        authToken: null,
        currentUser: null,
        loading: false,
        authError: null,
        registrationError: null
    };

    const mockData = {
        authToken: 'auhsdh271278',
        currentUser: {
            username: 'testuser'
        },
        error : {
            message: 'There was an error'
        }
    };

    it('Should set the initial state when nothing is passed in', function() {
        const state = authReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(initialState);
    });

    it('Should return the current stae on an unknown action', function() {
        const currentState = {};
        const state = authReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toEqual(currentState);
    });

    describe('setAuthToken', function() {
        it('Should set authToken', function() {
            const data = mockData.authToken
            const state = authReducer(initialState, setAuthToken(data));
            expect(state).toEqual({
                authToken: mockData.authToken,
                currentUser: null,
                loading: false,
                authError: null,
                registrationError: null
            });
        });
    });

    describe('clearAuth', function() {
        it('Should clear authToken & currentUser', function() {
            const currentState = {
                authToken: mockData.authToken,
                currentUser: mockData.currentUser,
                loading: false,
                authError: null,
                registrationError: null
            }
            const state = authReducer(currentState, clearAuth());
            expect(state).toEqual(initialState);
        });
    });

    describe('authRequest', function() {
        it('Should make request', function() {
            const state = authReducer(initialState, authRequest());
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: true,
                authError: null,
                registrationError: null
            });
        });
    });

    describe('authSuccess', function() {
        it('Should set currentUser', function() {
            const data = mockData.currentUser;
            const state = authReducer(initialState, authSuccess(data));
            expect(state).toEqual({
                authToken: null,
                currentUser: mockData.currentUser,
                loading: false,
                authError: null,
                registrationError: null
            });
        });
    });

    describe('authError', function() {
        it('Should set authError', function() {
            const data = mockData.error;
            const state = authReducer(initialState, authError(data));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                authError: mockData.error.message,
                registrationError: null
            });
        });
    });

    describe('registrationError', function() {
        it('Should set authError', function() {
            const data = mockData.error;
            const state = authReducer(initialState, registrationError(data));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                authError: null,
                registrationError: mockData.error.message
            });
        });
    });
});