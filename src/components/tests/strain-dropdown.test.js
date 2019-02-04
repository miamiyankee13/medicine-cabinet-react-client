import React from 'react';
import { shallow } from 'enzyme';
import { StrainDropdown } from '../strain-dropdown';

describe('<StrainDropdown />', function() {
    it('Renders without crashing', function() {
        shallow(<StrainDropdown />);
    });
});