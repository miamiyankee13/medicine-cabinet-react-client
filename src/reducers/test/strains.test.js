import strainsReducer from '../strains';
import {
    fetchStrainsRequest,
    fetchStrainsSuccess,
    fetchStrainsError,
    fetchUserStrainsRequest,
    fetchUserStrainsSuccess,
    fetchUserStrainsError,
    filterUserStrainsRequest,
    filterUserStrainsSuccess,
    filterUserStrainsError,
    fetchCurrentStrainRequest,
    fetchCurrentStrainSuccess,
    fetchCurrentStrainError,
    resetCurrentStrain
} from '../../actions/strains';

describe('Strains Reducer', function() {
    const initialState = {
        strains: [],
        userStrains: [],
        currentStrain: null,
        loading: false,
        feedback: null,
        error: null
    }

    const mockData = {
        strains: ['Strain 1', 'Strain 2'],
        userStrains: ['User Strain 1', 'User Strain 2'],
        currentStrain: { name: 'Strain 1'},
        error: { message: 'Bad request' }
    }

    it('Should set the initial state when nothing is passed in', function() {
        const state = strainsReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(initialState);
    });

    it('Should return the current stae on an unknown action', function() {
        const currentState = {};
        const state = strainsReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toEqual(currentState);
    });

    describe('fetchStrainsRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, fetchStrainsRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchStrainsSuccess', function() {
        it('Should set strains', function() {
            const data = { strains: mockData.strains };
            const state = strainsReducer(initialState, fetchStrainsSuccess(data));
            expect(state).toEqual({
                strains: data.strains,
                userStrains: [],
                currentStrain: null,
                loading: false,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchStrainsError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, fetchStrainsError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                feedback: null,
                error: error.message
            });
        });
    });

    describe('fetchUserStrainsRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, fetchUserStrainsRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchUserStrainsSuccess', function() {
        it('Should set strains', function() {
            const data = { strains: mockData.userStrains };
            const state = strainsReducer(initialState, fetchUserStrainsSuccess(data));
            expect(state).toEqual({
                strains: [],
                userStrains: data.strains,
                currentStrain: null,
                loading: false,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchUserStrainsError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, fetchUserStrainsError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                feedback: null,
                error: error.message
            });
        });
    });

    describe('fetchCurrentStrainRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, fetchCurrentStrainRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchCurrentStrainSuccess', function() {
        it('Should set current strain', function() {
            const data = mockData.currentStrain;
            const state = strainsReducer(initialState, fetchCurrentStrainSuccess(data));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: data,
                loading: false,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchCurrentStrainError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, fetchCurrentStrainError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                feedback: null,
                error: error.message
            });
        });
    });

    describe('resetCurrentStrain', function() {
        it('Should clear current strain', function() {
            const currentState = {
                strains: [],
                userStrains: [],
                currentStrain: mockData.currentStrain,
                loading: false,
                feedback: null,
                error: null
            }
            const state = strainsReducer(currentState, resetCurrentStrain());
            expect(state).toEqual(initialState);
        });
    });
});