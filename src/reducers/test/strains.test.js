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
    resetCurrentStrain,
    createStrainRequest,
    createStrainSuccess,
    createStrainError,
    editStrainRequest,
    editStrainSuccess,
    editStrainError,
    addStrainToCabinetRequest,
    addStrainToCabinetSuccess,
    addStrainToCabinetError,
    removeStrainFromCabinetRequest,
    removeStrainFromCabinetSuccess,
    removeStrainFromCabinetError,
    addCommentToStrainRequest,
    addCommentToStrainSuccess,
    addCommentToStrainError
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

    describe('filterUserStrainsRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, filterUserStrainsRequest());
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

    describe('filterUserStrainsSuccess', function() {
        it('Should set strains', function() {
            const data = { strains: mockData.userStrains };
            const state = strainsReducer(initialState, filterUserStrainsSuccess(data));
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

    describe('filterUserStrainsError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, filterUserStrainsError(error));
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

    describe('createStrainRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, createStrainRequest());
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

    describe('createStrainSuccess', function() {
        it('Should set feedback', function() {
            const state = strainsReducer(initialState, createStrainSuccess());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                feedback: 'Strain added!',
                error: null
            });
        });
    });

    describe('createStrainError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, createStrainError(error));
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

    describe('editStrainRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, editStrainRequest());
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

    describe('createStrainSuccess', function() {
        it('Should set feedback', function() {
            const state = strainsReducer(initialState, editStrainSuccess());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                feedback: 'Strain updated!',
                error: null
            });
        });
    });

    describe('editStrainError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, editStrainError(error));
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

    describe('addStrainToCabinetRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, addStrainToCabinetRequest());
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

    describe('addStrainToCabinetSuccess', function() {
        it('Should reset loading', function() {
            const currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                feedback: null,
                error: null
            }
            const state = strainsReducer(currentState, addStrainToCabinetSuccess());
            expect(state).toEqual(initialState);
        });
    });

    describe('addStrainToCabinetError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, addStrainToCabinetError(error));
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

    describe('removeStrainFromCabinetRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, removeStrainFromCabinetRequest());
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

    describe('removeStrainFromCabinetSuccess', function() {
        it('Should reset loading', function() {
            const currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                feedback: null,
                error: null
            }
            const state = strainsReducer(currentState, removeStrainFromCabinetSuccess());
            expect(state).toEqual(initialState);
        });
    });

    describe('removeStrainFromCabinetError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, removeStrainFromCabinetError(error));
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

    describe('addCommentToStrainRequest', function() {
        it('Should make request', function() {
            const state = strainsReducer(initialState, addCommentToStrainRequest());
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

    describe('addCommentToStrainSuccess', function() {
        it('Should reset loading', function() {
            const currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                feedback: null,
                error: null
            }
            const state = strainsReducer(currentState, addCommentToStrainSuccess());
            expect(state).toEqual(initialState);
        });
    });

    describe('addCommentToStrainError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = strainsReducer(initialState, addCommentToStrainError(error));
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
});