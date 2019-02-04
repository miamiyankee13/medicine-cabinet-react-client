import React from 'react';
import { shallow } from 'enzyme';
import { EditStrainPage } from '../edit-strain-page';

describe('<EditStrainPage />', function() {
    it('Renders without crashing', function() {
        const mockData = {
            error: null
        }
        shallow(<EditStrainPage strainData={mockData}/>);
    });
});