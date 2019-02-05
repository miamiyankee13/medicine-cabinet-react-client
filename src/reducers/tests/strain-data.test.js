import strainDataReducer from '../strain-data';
import {
    fetchUserStrainsRequest,
    fetchUserStrainsSuccess,
    fetchUserStrainsError,
    fetchStrainsRequest,
    fetchStrainsSuccess,
    fetchStrainsError,
    fetchCurrentStrainRequest,
    fetchCurrentStrainSuccess,
    fetchCurrentStrainError,
    resetCurrentStrain,
    addStrainToCabinetRequest,
    addStrainToCabinetSuccess,
    addStrainToCabinetError,
    removeStrainFromCabinetRequest,
    removeStrainFromCabinetSuccess,
    removeStrainFromCabinetError,
    addCommentToStrainRequest,
    addCommentToStrainSuccess,
    addCommentToStrainError,
    removeCommentFromStrainRequest,
    removeCommentFromStrainSuccess,
    removeCommentFromStrainError,
    createStrainRequest,
    createStrainSuccess,
    createStrainError,
    editStrainRequest,
    editStrainSuccess,
    editStrainError
} from '../../actions/strain-data';

describe('strainDataReducer', function() {

    const initialState = {
        strains: [],
        userStrains: [],
        currentStrain: null,
        loading: false,
        error: null
    }

    const mockData = {
        strains: ['Jack Herer', 'Blueberry'],
        userStrains: ['OGKB', 'Sour Diesel'],
        currentStrain: {
            name: 'Gelato',
            type: 'Hybrid',
            flavor: 'Sweet'
        },
        error: {
            message: 'There was an error'
        }
    }

    it('Should set the initial state when nothing is passed in', function() {
        const state = strainDataReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(initialState)
    });

    it('Should return the currentState on an unknown action', function() {
        let currentState = initialState;
        const state = strainDataReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('fetchUserStrainsRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, fetchUserStrainsRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('fetchUserStrainsSuccess', function() {
        it('Should add user strains to state', function() {
            let currentState = initialState;
            let response = {
                strains: mockData.userStrains
            }
            const state = strainDataReducer(currentState, fetchUserStrainsSuccess(response));
            expect(state).toEqual({
                strains: [],
                userStrains: mockData.userStrains,
                currentStrain: null,
                loading: false,
                error: null
            })
        });
    });

    describe('fetchUserStrainsError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, fetchUserStrainsError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('fetchStrainsRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, fetchStrainsRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('fetchStrainsSuccess', function() {
        it('Should add strains to state', function() {
            let currentState = initialState;
            let response = {
                strains: mockData.strains
            }
            const state = strainDataReducer(currentState, fetchStrainsSuccess(response));
            expect(state).toEqual({
                strains: mockData.strains,
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: null
            })
        });
    });

    describe('fetchStrainsError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, fetchStrainsError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('fetchCurrentStrainRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, fetchCurrentStrainRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('fetchCurrentStrainSuccess', function() {
        it('Should add strain to state', function() {
            let currentState = initialState;
            let response = mockData.currentStrain
            const state = strainDataReducer(currentState, fetchCurrentStrainSuccess(response));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: mockData.currentStrain,
                loading: false,
                error: null
            })
        });
    });

    describe('fetchCurrentStrainError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, fetchCurrentStrainError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('resetCurrentStrain', function() {
        it('Should remove current strain from state', function() {
            let currentState = {
                strains: [],
                userStrains: [],
                currentStrain: mockData.currentStrain,
                loading: false,
                error: null
            }
            const state = strainDataReducer(currentState, resetCurrentStrain());
            expect(state).toEqual(initialState);
        });
    });

    describe('addStrainToCabinetRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, addStrainToCabinetRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('addStrainToCabinetSuccess', function() {
        it('Should toggle loading back to false', function() {
            let currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            }
            const state = strainDataReducer(currentState, addStrainToCabinetSuccess());
            expect(state).toEqual(initialState)
        });
    });

    describe('addStrainToCabinetError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, addStrainToCabinetError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('removeStrainFromCabinetRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, removeStrainFromCabinetRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('removeStrainFromCabinetSuccess', function() {
        it('Should toggle loading back to false', function() {
            let currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            }
            const state = strainDataReducer(currentState, removeStrainFromCabinetSuccess());
            expect(state).toEqual(initialState)
        });
    });

    describe('removeStrainFromCabinetError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, removeStrainFromCabinetError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('addCommentToStrainRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, addCommentToStrainRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('addCommentToStrainSuccess', function() {
        it('Should toggle loading back to false', function() {
            let currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            }
            const state = strainDataReducer(currentState, addCommentToStrainSuccess());
            expect(state).toEqual(initialState)
        });
    });

    describe('addCommentToStrainError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, addCommentToStrainError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('removeCommentFromStrainRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, removeCommentFromStrainRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('removeCommentFromStrainSuccess', function() {
        it('Should toggle loading back to false', function() {
            let currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            }
            const state = strainDataReducer(currentState, removeCommentFromStrainSuccess());
            expect(state).toEqual(initialState)
        });
    });

    describe('removeCommentFromStrainError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, removeCommentFromStrainError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('createStrainRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, createStrainRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('createStrainSuccess', function() {
        it('Should toggle loading back to false', function() {
            let currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            }
            const state = strainDataReducer(currentState, createStrainSuccess());
            expect(state).toEqual(initialState)
        });
    });

    describe('createStrainError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, createStrainError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });

    describe('editStrainRequest', function() {
        it('Should make request', function() {
            let currentState = initialState;
            const state = strainDataReducer(currentState, editStrainRequest());
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            })
        });
    });

    describe('editStrainSuccess', function() {
        it('Should toggle loading back to false', function() {
            let currentState = {
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: true,
                error: null
            }
            const state = strainDataReducer(currentState, editStrainSuccess());
            expect(state).toEqual(initialState)
        });
    });

    describe('editStrainError', function() {
        it('Should add error to state', function() {
            let currentState = initialState;
            let error = mockData.error
            const state = strainDataReducer(currentState, editStrainError(error));
            expect(state).toEqual({
                strains: [],
                userStrains: [],
                currentStrain: null,
                loading: false,
                error: error.message
            })
        });
    });
    
});
