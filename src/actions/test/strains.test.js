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
    describe('fetchStrainsRequest', function() {
        it('Should return the action', function() {
            const action = fetchStrainsRequest();
            expect(action.type).toEqual(FETCH_STRAINS_REQUEST);
        });
    });
})