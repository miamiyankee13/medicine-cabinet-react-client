import { API_BASE_URL } from '../../config';
import {
    FETCH_STRAINS_REQUEST,
    FETCH_STRAINS_SUCCESS,
    FETCH_STRAINS_ERROR,
    FETCH_USER_STRAINS_REQUEST,
    FETCH_USER_STRAINS_SUCCESS,
    FETCH_USER_STRAINS_ERROR,
    FILTER_USER_STRAINS_REQUEST,
    FILTER_USER_STRAINS_SUCCESS,
    FILTER_USER_STRAINS_ERROR,
    FETCH_CURRENT_STRAIN_REQUEST,
    FETCH_CURRENT_STRAIN_SUCCESS,
    FETCH_CURRENT_STRAIN_ERROR,
    RESET_CURRENT_STRAIN,
    CREATE_STRAIN_REQUEST,
    CREATE_STRAIN_SUCCESS,
    CREATE_STRAIN_ERROR,
    EDIT_STRAIN_REQUEST,
    EDIT_STRAIN_SUCCESS,
    EDIT_STRAIN_ERROR,
    ADD_STRAIN_TO_CABINET_REQUEST,
    ADD_STRAIN_TO_CABINET_SUCCESS,
    ADD_STRAIN_TO_CABINET_ERROR,
    REMOVE_STRAIN_FROM_CABINET_REQUEST,
    REMOVE_STRAIN_FROM_CABINET_SUCCESS,
    REMOVE_STRAIN_FROM_CABINET_ERROR,
    ADD_COMMENT_TO_STRAIN_REQUEST,
    ADD_COMMENT_TO_STRAIN_SUCCESS,
    ADD_COMMENT_TO_STRAIN_ERROR,
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

    describe('filterUserStrainsRequest', function() {
        it('Should return the action', function() {
            const action = filterUserStrainsRequest();
            expect(action.type).toEqual(FILTER_USER_STRAINS_REQUEST);
        });
    });

    describe('filterUserStrainsSuccess', function() {
        it('Should return the action', function() {
            const userStrains = mockData.userStrains;
            const action = filterUserStrainsSuccess(userStrains);
            expect(action.type).toEqual(FILTER_USER_STRAINS_SUCCESS);
            expect(action.data).toEqual(userStrains)
        });
    });

    describe('filterUserStrainsError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = filterUserStrainsError(error);
            expect(action.type).toEqual(FILTER_USER_STRAINS_ERROR);
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

    describe('resetCurrentStrain', function() {
        it('Should return the action', function() {
            const action = resetCurrentStrain();
            expect(action.type).toEqual(RESET_CURRENT_STRAIN);
        });
    });

    describe('createStrainRequest', function() {
        it('Should return the action', function() {
            const action = createStrainRequest();
            expect(action.type).toEqual(CREATE_STRAIN_REQUEST);
        });
    });

    describe('createStrainSuccess', function() {
        it('Should return the action', function() {
            const action = createStrainSuccess();
            expect(action.type).toEqual(CREATE_STRAIN_SUCCESS);
        });
    });

    describe('createStrainError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = createStrainError(error);
            expect(action.type).toEqual(CREATE_STRAIN_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('editStrainRequest', function() {
        it('Should return the action', function() {
            const action = editStrainRequest();
            expect(action.type).toEqual(EDIT_STRAIN_REQUEST);
        });
    });

    describe('editStrainSuccess', function() {
        it('Should return the action', function() {
            const action = editStrainSuccess();
            expect(action.type).toEqual(EDIT_STRAIN_SUCCESS);
        });
    });

    describe('editStrainError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = editStrainError(error);
            expect(action.type).toEqual(EDIT_STRAIN_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('addStrainToCabinetRequest', function() {
        it('Should return the action', function() {
            const action = addStrainToCabinetRequest();
            expect(action.type).toEqual(ADD_STRAIN_TO_CABINET_REQUEST);
        });
    });

    describe('addStrainToCabinetSuccess', function() {
        it('Should return the action', function() {
            const action = addStrainToCabinetSuccess();
            expect(action.type).toEqual(ADD_STRAIN_TO_CABINET_SUCCESS);
        });
    });

    describe('addStrainToCabinetError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = addStrainToCabinetError(error);
            expect(action.type).toEqual(ADD_STRAIN_TO_CABINET_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('removeStrainFromCabinetRequest', function() {
        it('Should return the action', function() {
            const action = removeStrainFromCabinetRequest();
            expect(action.type).toEqual(REMOVE_STRAIN_FROM_CABINET_REQUEST);
        });
    });

    describe('removeStrainFromCabinetSuccess', function() {
        it('Should return the action', function() {
            const action = removeStrainFromCabinetSuccess();
            expect(action.type).toEqual(REMOVE_STRAIN_FROM_CABINET_SUCCESS);
        });
    });

    describe('removeStrainFromCabinetError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = removeStrainFromCabinetError(error);
            expect(action.type).toEqual(REMOVE_STRAIN_FROM_CABINET_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('addCommentToStrainRequest', function() {
        it('Should return the action', function() {
            const action = addCommentToStrainRequest();
            expect(action.type).toEqual(ADD_COMMENT_TO_STRAIN_REQUEST);
        });
    });

    describe('addCommentToStrainSuccess', function() {
        it('Should return the action', function() {
            const action = addCommentToStrainSuccess();
            expect(action.type).toEqual(ADD_COMMENT_TO_STRAIN_SUCCESS);
        });
    });

    describe('addCommentToStrainError', function() {
        it('Should return the action', function() {
            const error = mockData.error;
            const action = addCommentToStrainError(error);
            expect(action.type).toEqual(ADD_COMMENT_TO_STRAIN_ERROR);
            expect(action.error).toEqual(error);
        });
    });
})