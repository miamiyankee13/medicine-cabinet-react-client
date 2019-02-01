import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class StrainDetails extends React.Component {
    render() {
        
        const comments = this.props.strain.comments.map((comment, index) => {
            let removeButton;
            if (this.props.currentUser === comment.author) {
                removeButton = <button data-index={index}>Remove</button>;
            } else {
                removeButton = '';
            }

            return (
                <div key={`comment-${index}`}>
                    <p><em>{comment.content}</em></p>
                    <p><small>Posted by {comment.author}</small></p>
                    {removeButton}
                </div>
            );

        });
        
        return (
            <div className="flex-single-strain">
                <h2>{this.props.strain.name}</h2>
                <h3>{this.props.strain.type}</h3>
                <h4>Flavor</h4>
                <p>{this.props.strain.flavor}</p>
                <h4>Description</h4>
                <p>{this.props.strain.description}</p>
                <div>
                    <h4>Community Comments</h4>
                    {comments}
                    <label htmlFor="add-comment">Add a comment</label>
                    <textarea id="add-comment" name="add-comment" rows="4" cols="30"></textarea>
                    <button>Add Comment</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        strain: state.strainData.currentStrain,
        currentUser: state.auth.currentUser.userName
    };
};

export default requiresLogin()(connect(mapStateToProps)(StrainDetails));