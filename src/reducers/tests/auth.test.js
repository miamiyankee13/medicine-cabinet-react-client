import authReducer from '../auth';
import {
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError
} from '../../actions/auth'

describe('authReducer', function() {
    
    const initialState = {
        authToken: null,
        currentUser: null,
        loading: false,
        error: null
    };

    const mockData = {
        authToken: 'eadhadu218319283',
        currentUser: {
            userName: 'miamiyankee13'
        },
        error: {
            message: 'There was an error'
        }
    }

    it('Should set the initial state when nothing is passed in', function() {
        const state = authReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', function() {
        let currentState = initialState;
        const state = authReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', function() {
        it('Should set auth token', function() {
            let currentState = initialState
            const state = authReducer(currentState, setAuthToken(mockData.authToken));
            expect(state).toEqual({
                authToken: mockData.authToken,
                currentUser: null,
                loading: false,
                error: null
            })
        });
    });

    describe('clearAuth', function() {
        it('Should clear auth token & current user', function() {
            let currentState = {
                authToken: mockData.authToken,
                currentUser: mockData.currentUser,
                loading: false,
                error: null
            }
            const state = authReducer(currentState, clearAuth());
            expect(state).toEqual(initialState);
        });
    });

    describe('authRequest', function() {
        it('Should make auth request', function() {
            let currentState = initialState;
            const state = authReducer(currentState, authRequest());
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: true,
                error: null
            })
        });
    });

    describe('authSuccess', function() {
        it('Should add current user to state', function() {
            let currentState = initialState;
            let user = mockData.currentUser
            const state = authReducer(currentState, authSuccess(user));
            expect(state).toEqual({
                authToken: null,
                currentUser: mockData.currentUser,
                loading: false,
                error: null
            })
        });
    });

    describe('authError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error;
            const state = authReducer(currentState, authError(error));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                error: mockData.error.message
            });
        });
    });

});