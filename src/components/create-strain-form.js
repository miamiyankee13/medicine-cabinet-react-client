import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { createStrain } from '../actions/strain-data';
import Input from './input';
import { required, nonEmpty} from '../validators';

export class CreateStrainForm extends React.Component {
    onSubmit(values) {
        const {name, type, description, flavor} = values;
        return this.props.dispatch(createStrain(name, type, description, flavor))
            .then(() => this.props.dispatch(reset('createStrain')))
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="name">Name</label>
                <Field component={Input} type="text" name="name" validate={[required, nonEmpty]} />
                <label htmlFor="type">Type</label>
                <Field component={Input} type="text" name="type" validate={[required, nonEmpty]} />
                <label htmlFor="description">Description</label>
                <Field component={Input} type="text" name="description" validate={[required, nonEmpty]} />
                <label htmlFor="flavor">Flavor</label>
                <Field component={Input} type="text" name="flavor" validate={[required, nonEmpty]} />
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                    Create
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'createStrain',
})(CreateStrainForm);