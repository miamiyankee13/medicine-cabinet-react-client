import React from 'react';
import { shallow } from 'enzyme';
import Input from '../input';

describe('<Input />', function() {
    it('Renders without crashing', function() {
        const mockData = {
            touched: null,
            name: 'Input'
        }
        shallow(<Input meta={mockData} input={mockData} />);
    });
});