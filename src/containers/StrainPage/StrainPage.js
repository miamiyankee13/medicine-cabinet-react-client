import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentStrain, resetCurrentStrain, removeCommentFromStrain } from '../../actions/strains';
import requiresLogin from '../../hoc/requiresLogin/requiresLogin';
import Button from '../../components/UI/Button/Button';
import StrainDetails from './StrainDetails/StrainDetails';
import StrainCommentForm from '../Forms/StrainCommentForm/StrainCommentForm';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './StrainPage.module.css';

class StrainPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCurrentStrain(this.props.match.params.id))
    }

    componentWillUnmount() {
        this.props.dispatch(resetCurrentStrain());
    }

    handleRemoveComment = (event, id, commentId) => {
        event.preventDefault();
        this.props.dispatch(removeCommentFromStrain(id, commentId))
            .then(() => this.props.dispatch(fetchCurrentStrain(id)));
    }

    render() {
        if (this.props.error) {
            return <p className="error">{this.props.error}</p>
        }

        if (this.props.loading || !this.props.strain) {
            return <Spinner />;
        }

        let comments = <p>{`Be the first to leave a comment about ${this.props.strain.name}!`}</p>
        if (this.props.strain.comments.length > 0) {
            comments = this.props.strain.comments.map(comment => {
                console.log(comment.content)
                let removeButton = null;
                if (this.props.currentUser === comment.author) {
                    removeButton = <Button clicked={(event) => this.handleRemoveComment(event, this.props.strain._id, comment._id)}>Remove</Button>
                }
    
                let date = new Date(comment.created);
                let month = date.getMonth() + 1;
                let day = date.getDate();
                let year = date.getFullYear();
                let time = date.toLocaleTimeString();
    
                return (
                    <div key={comment._id} className={styles.comments}>
                        <p>{comment.content}</p>
                        <p className={styles.commentInfo}><small>Posted by <em>{comment.author}</em></small></p>
                        <p className={styles.commentInfo}><small>{month}/{day}/{year} @ {time}</small></p>
                        {removeButton}
                    </div>
                );
            });
        }
        
        return (
            <Fragment>
                <StrainDetails 
                    name={this.props.strain.name}
                    type={this.props.strain.type}
                    flavor={this.props.strain.flavor}
                    description={this.props.strain.description}
                    comments={comments}
                />
                <StrainCommentForm />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    strain: state.strainData.currentStrain,
    currentUser: state.auth.currentUser.userName,
    loading: state.strainData.loading,
    error: state.strainData.error
});

export default requiresLogin()(connect(mapStateToProps)(StrainPage));