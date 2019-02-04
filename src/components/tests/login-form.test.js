import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm} from '../login-form';

describe('<LoginForm />', function() {
    it('Renders without crashing', function() {
        const callback = jest.fn();
        shallow(<LoginForm handleSubmit={callback} />);
    });
});