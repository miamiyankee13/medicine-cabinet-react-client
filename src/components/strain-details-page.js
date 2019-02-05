import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchCurrentStrain, addCommentToStrain, removeCommentFromStrain, resetCurrentStrain } from '../actions/strain-data';
import './strain-details-page.css';

export class StrainDetailsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchCurrentStrain(this.props.match.params.id))
    }

    componentWillUnmount() {
        this.props.dispatch(resetCurrentStrain());
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    addComment(event) {
        event.preventDefault();
        const strain = this.props.strain;
        const content = this.state.value;
        const author = this.props.currentUser;
        if (content === '' || content === ' ') {
            alert('Comment is blank. Please add some content')
            return
        }
        this.props.dispatch(addCommentToStrain(strain._id, content, author))
            .then(() => this.props.dispatch(fetchCurrentStrain(strain._id)));
        this.setState({
            value: ''
        });
    }

    removeComment(event) {
        event.preventDefault();
        const strain = this.props.strain;
        const index = event.target.getAttribute('data-index');
        const comment = this.props.strain.comments[index];
        this.props.dispatch(removeCommentFromStrain(strain._id, comment._id))
            .then(() => this.props.dispatch(fetchCurrentStrain(strain._id)));
    }

    render() {

        if (this.props.error) {
            return <p>{this.props.error}</p>;
        }

        if (!this.props.strain) {
            return null;
        }

        const comments = this.props.strain.comments.map((comment, index) => {
            let removeButton;
            if (this.props.currentUser === comment.author) {
                removeButton = <button data-index={index} onClick={this.removeComment}>Remove</button>;
            } else {
                removeButton = '';
            }

            return (
                <div key={`comment-${index}`}>
                    <br />
                    <p className="comment-content"><em>{comment.content}</em></p>
                    <p><small>Posted by {comment.author}</small></p>
                    {removeButton}
                </div>
            );

        });

        return (
            <section className="flex-single-strain" aria-live="polite">
                <h2>{this.props.strain.name}</h2>
                <br />
                {
                    (this.props.strain.type === 'Sativa') ? <h3 className="sativa">Sativa</h3> :
                        (this.props.strain.type === 'Indica') ? <h3 className="indica">Indica</h3> :
                            <h3 className="hybrid">Hybrid</h3>
                }
                <br />
                <h4 className="detail-heading">Flavor</h4>
                <br />
                <p>{this.props.strain.flavor}</p>
                <br />
                <h4 className="detail-heading">Description</h4>
                <br />
                <p>{this.props.strain.description}</p>
                <br />
                <div>
                    <h4 className="detail-heading">Community Comments</h4>
                    {comments}
                    <br />
                    <label htmlFor="add-comment">Add a comment</label>
                    <textarea
                        id="add-comment"
                        name="add-comment"
                        rows="4"
                        cols="30"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    <button onClick={this.addComment}>Add Comment</button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.strainData.error,
        strain: state.strainData.currentStrain,
        currentUser: state.auth.currentUser.userName
    };
};

export default requiresLogin()(connect(mapStateToProps)(StrainDetailsPage));