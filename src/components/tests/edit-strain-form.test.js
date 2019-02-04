import React from 'react';
import { shallow } from 'enzyme';
import { EditStrainForm } from '../edit-strain-form';

describe('<EditStrainForm />', function() {
    it('Renders without crashing', function() {
        shallow(<EditStrainForm />);
    });
});