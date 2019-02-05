import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import EditStrainForm from './edit-strain-form';

export class EditStrainPage extends React.Component {
    render() {
        let errorMessage;

        if (this.props.strainData.error) {
            errorMessage = <p>{this.props.strainData.error}</p>
        } else {
            errorMessage = null;
        }

        return (
            <section aria-live="polite">
                <h2>Edit a Strain</h2>
                {errorMessage}
                <EditStrainForm />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        strainData: state.strainData
    };
};

export default requiresLogin()(connect(mapStateToProps)(EditStrainPage));