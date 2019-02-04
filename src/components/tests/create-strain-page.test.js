import React from 'react';
import { shallow } from 'enzyme';
import { CreateStrainPage } from '../create-strain-page';

describe('<CreateStrainPage />', function() {
    it('Renders without crashing', function() {
        const mockData = {
            error: null
        }
        shallow(<CreateStrainPage strainData={mockData}/>);
    });
});