import React from 'react';
import { shallow } from 'enzyme';
import { CabinetPage } from '../cabinet-page';

describe('<CabinetPage />', function() {
    it('Renders without crashing', function() {
        const dispatch = jest.fn()
        const userStrains = ['Jack Herer', 'Blueberry']
        shallow(<CabinetPage userStrains={userStrains} dispatch={dispatch} />);
    });
});