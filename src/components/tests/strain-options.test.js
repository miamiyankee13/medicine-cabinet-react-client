import React from 'react';
import { shallow } from 'enzyme';
import { StrainOptions } from '../strain-options';

describe('<StrainOptions />', function() {
    it('Renders without crashing', function() {
        const strains = ['Blueberry', 'Sour Diesel'];
        shallow(<StrainOptions strains={strains} />);
    });
});