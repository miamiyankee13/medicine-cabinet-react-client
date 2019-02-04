import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../not-found';

describe('<NotFound />', function() {
    it('Renders without crashing', function() {
        shallow(<NotFound />);
    });
});