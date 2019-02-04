import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationPage } from '../registration-page';

describe('<RegistrationPage />', function() {
    it('Renders without crashing', function() {
        shallow(<RegistrationPage />);
    });
});