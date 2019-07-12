import { API_BASE_URL } from '../../config';
import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    REGISTRATION_ERROR,
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError,
    registrationError,
    login,
    refreshAuthToken,
    registerUser,
} from '../auth/auth';

describe('Action Creators', function() {
    describe('setAuthToken', function() {
        it('Should return the action', function() {
            const authToken = 'ahd27178h7';
            const action = setAuthToken(authToken);
            expect(action.type).toEqual(SET_AUTH_TOKEN);
            expect(action.authToken).toEqual(authToken);
        });
    });

    describe('clearAuth', function() {
        it('Should return the action', function() {
            const action = clearAuth()
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
                username: 'testuser',
                firstName: 'Test',
                lastName: 'Tester'
            }
            const action = authSuccess(currentUser);
            expect(action.type).toEqual(AUTH_SUCCESS);
            expect(action.currentUser).toEqual(currentUser);
        });
    });

    describe('authError', function() {
        it('Should return the action', function() {
            const error = 'Unauthorized';
            const action = authError(error);
            expect(action.type).toEqual(AUTH_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('registrationError', function() {
        it('Should return the action', function() {
            const error = 'Unauthorized';
            const action = registrationError(error);
            expect(action.type).toEqual(REGISTRATION_ERROR);
            expect(action.error).toEqual(error);
        });
    });
});

describe('Async Actions', function() {
    describe('login', function(){
        it('Should dispatch request action', function() {
            const data = {
                user: {}
            }

            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            return login()(dispatch).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: "{}"
                });
                expect(dispatch).toHaveBeenCalledWith(authRequest());
            });
        });
    });

    describe('refreshAuthToken', function(){
        it('Should dispatch request action', function() {
            const data = {
                user: {}
            }

            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            return refreshAuthToken()(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/refresh`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                expect(dispatch).toHaveBeenCalledWith(authRequest());
            });
        });
    });

    describe('registerUser', function() {
        it('Should make valid request', function() {
            const data = {
                user: {}
            }

            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            const userName = "testuser";
            const password = "testpassword";
            const firstName = "Test";
            const lastName = "Tester";
            return registerUser(userName, password, firstName, lastName)(dispatch).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        userName,
                        password,
                        firstName,
                        lastName
                    })
                });
            });
        });
    });
});