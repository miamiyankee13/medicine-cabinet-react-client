import strainsReducer from '../strains';
import {
    fetchStrainsRequest,
    fetchStrainsSuccess,
    fetchStrainsError
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
                strains: mockData.strains,
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
                error: mockData.error.message
            });
        });
    });
});