import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../landing-page';

describe('<LandingPage />', function() {
    it('Renders without crashing', function() {
        shallow(<LandingPage />);
    });
});