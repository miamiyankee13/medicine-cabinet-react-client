import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../login-page';

describe('<LoginPage />', function() {
    it('Renders without crashing', function() {
        shallow(<LoginPage />);
    });
});