import { 
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError
 } from '../auth';

describe('setAuthToken', function() {
    it('Should return the action', function() {
        const authToken = 'eada337283r7hda';
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('clearAuth', function() {
    it('Should return the action', function() {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
});

describe('authRequest', function() {
    it('Should return the action', function() {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('authSuccess', function() {
    it('Should return the action', function() {
        const currentUser = {
            userName: 'miamiyankee13',
            firstName: 'Anthony',
            lastName: 'Damico'
        }
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    });
});

describe('authErrror', function() {
    it('Should return the action', function() {
        const error = 'Unauthorized';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
});