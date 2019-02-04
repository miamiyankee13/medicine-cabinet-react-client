import React from 'react';
import { shallow } from 'enzyme';
import { CreateStrainForm } from '../create-strain-form';

describe('<CreateStrainForm />', function() {
    it('Renders without crashing', function() {
        shallow(<CreateStrainForm />);
    });
});