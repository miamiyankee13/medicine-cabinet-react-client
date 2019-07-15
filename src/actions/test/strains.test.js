import { API_BASE_URL } from '../../config';
import {
    FETCH_STRAINS_REQUEST,
    FETCH_STRAINS_SUCCESS,
    FETCH_STRAINS_ERROR,
    fetchStrainsRequest,
    fetchStrainsSuccess,
    fetchStrainsError
} from '../strains';

describe('Action Creators', function() {
    const mockData = {
        strains: ['Strain 1', 'Strain 2'],
        userStrains: ['User Strain 1', 'User Strain 2'],
        currentStrain: { name: 'Strain 1'},
        error: { message: 'Bad request' }
    }

    describe('fetchStrainsRequest', function() {
        it('Should return the action', function() {
            const action = fetchStrainsRequest();
            expect(action.type).toEqual(FETCH_STRAINS_REQUEST);
        });
    });

    describe('fetchStrainsSuccess', function() {
        it('Should return the action', function() {
            const strains = mockData.strains;
            const action = fetchStrainsSuccess(strains);
            expect(action.type).toEqual(FETCH_STRAINS_SUCCESS);
            expect(action.data).toEqual(strains)
        });
    });

    describe('fetchStrainsError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = fetchStrainsError(error);
            expect(action.type).toEqual(FETCH_STRAINS_ERROR);
            expect(action.error).toEqual(error)
        });
    });
})