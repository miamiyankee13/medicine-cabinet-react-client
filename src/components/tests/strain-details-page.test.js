import React from 'react';
import { shallow } from 'enzyme';
import { StrainDetailsPage } from '../strain-details-page';

describe('<StrainDetailsPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn();
        const mockData = {
            params: {
                id: 1221321412
            }
        }
        shallow(<StrainDetailsPage match={mockData} dispatch={dispatch}/>);
    });
});