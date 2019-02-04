import React from 'react';
import { shallow } from 'enzyme';
import { CabinetPage } from '../cabinet-page';

describe('<CabinetPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn()
        shallow(<CabinetPage dispatch={dispatch} />);
    });
});