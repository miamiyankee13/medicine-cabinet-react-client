import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCommentToStrain, fetchCurrentStrain } from '../../../actions/strains';
import Textarea from '../../../components/UI/FormElements/Textarea/Textarea';
import Button from '../../../components/UI/Button/Button';

class StrainCommentForm extends Component {
    state = {
        form: {
            comment: ''
        },
        formIsValid: false
    }

    handleInputChange = (event, inputId) => {
        const updatedForm = {
            ...this.state.form
        }

        updatedForm[inputId] = event.target.value;

        let formIsValid = true;
        for (let input in updatedForm) {
            formIsValid = updatedForm[input].trim() !== "" && formIsValid;
        }

        this.setState({
            form: updatedForm,
            formIsValid
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const strain = this.props.strain;
        const content = this.state.form.comment;
        const author = this.props.currentUser;
        this.props.dispatch(addCommentToStrain(strain._id, content, author))
            .then(() => this.props.dispatch(fetchCurrentStrain(strain._id)));
        this.setState({
            value: ''
        });

        window.scrollTo(0,0);
    }

    render() {
        let message = null;
        if (this.props.error) {
            message = <p className="error">{this.props.error}</p>
        }

        return (
            <section className="info-form" aria-live="polite">
                {message}
                <h3 className="form-heading">Add a comment!</h3>
                <form onSubmit={this.handleSubmit}>
                    <Textarea 
                        name="comment"
                        label="Comment"
                        rows="4"
                        cols="30"
                        placeholder="Comment..."
                        value={this.state.form.comment}
                        changed={(event) => this.handleInputChange(event, "comment")}
                    />
                    <Button disabled={!this.state.formIsValid}>Add Comment</Button>
            </form>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    strain: state.strainData.currentStrain,
    currentUser: state.auth.currentUser.userName,
    error: state.strainData.error
});

export default connect(mapStateToProps)(StrainCommentForm);