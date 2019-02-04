import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../nav';

describe('<Nav />', function() {
    it('Renders without crashing', function() {
        shallow(<Nav />);
    });
});