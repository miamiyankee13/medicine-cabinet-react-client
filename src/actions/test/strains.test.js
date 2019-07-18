import { API_BASE_URL } from '../../config';
import {
    FETCH_STRAINS_REQUEST,
    FETCH_STRAINS_SUCCESS,
    FETCH_STRAINS_ERROR,
    FETCH_USER_STRAINS_REQUEST,
    FETCH_USER_STRAINS_SUCCESS,
    FETCH_USER_STRAINS_ERROR,
    FETCH_CURRENT_STRAIN_REQUEST,
    FETCH_CURRENT_STRAIN_SUCCESS,
    FETCH_CURRENT_STRAIN_ERROR,
    fetchStrainsRequest,
    fetchStrainsSuccess,
    fetchStrainsError,
    fetchUserStrainsRequest,
    fetchUserStrainsSuccess,
    fetchUserStrainsError,
    fetchCurrentStrainRequest,
    fetchCurrentStrainSuccess,
    fetchCurrentStrainError
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

    describe('fetchUserStrainsRequest', function() {
        it('Should return the action', function() {
            const action = fetchUserStrainsRequest();
            expect(action.type).toEqual(FETCH_USER_STRAINS_REQUEST);
        });
    });

    describe('fetchUserStrainsSuccess', function() {
        it('Should return the action', function() {
            const userStrains = mockData.userStrains;
            const action = fetchUserStrainsSuccess(userStrains);
            expect(action.type).toEqual(FETCH_USER_STRAINS_SUCCESS);
            expect(action.data).toEqual(userStrains)
        });
    });

    describe('fetchUserStrainsError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = fetchUserStrainsError(error);
            expect(action.type).toEqual(FETCH_USER_STRAINS_ERROR);
            expect(action.error).toEqual(error)
        });
    });

    describe('fetchCurrentStrainRequest', function() {
        it('Should return the action', function() {
            const action = fetchCurrentStrainRequest();
            expect(action.type).toEqual(FETCH_CURRENT_STRAIN_REQUEST);
        });
    });

    describe('fetchCurrentStrainSuccess', function() {
        it('Should return the action', function() {
            const strain = mockData.currentStrain;
            const action = fetchCurrentStrainSuccess(strain);
            expect(action.type).toEqual(FETCH_CURRENT_STRAIN_SUCCESS);
            expect(action.data).toEqual(strain)
        });
    });

    describe('fetchCurrentStrainError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = fetchCurrentStrainError(error);
            expect(action.type).toEqual(FETCH_CURRENT_STRAIN_ERROR);
            expect(action.error).toEqual(error)
        });
    });
})