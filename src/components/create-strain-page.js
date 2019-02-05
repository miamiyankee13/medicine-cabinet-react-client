import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import CreateStrainForm from './create-strain-form';

export class CreateStrainPage extends React.Component {
    render() {
        let errorMessage;

        if (this.props.strainData.error) {
            errorMessage = <p>{this.props.strainData.error}</p>
        } else {
            errorMessage = null;
        }

        return (
            <section aria-live="polite">
                <h2>Create a Strain</h2>
                {errorMessage}
                <CreateStrainForm />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        strainData: state.strainData
    };
};

export default requiresLogin()(connect(mapStateToProps)(CreateStrainPage));