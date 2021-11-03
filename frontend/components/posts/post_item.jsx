import React from 'react';
import EditPostFormContainer from './edit_post_form_container';

const PostItem = (props) => {

    let profile; 

    if (props.post.profile) {
        profile = <span>{props.post.profile.first_name} {props.post.profile.last_name}</span>
    } else {
        profile = null;
    }

    return <li className="post-item">
        <div id="post-details">
            {props.post.author.profile_picture ? <img src={props.post.author.profile_picture} /> : <img src={window.defaultProfile} />}
            <span>{props.post.author.first_name} {props.post.author.last_name}</span>
        </div>
        <span>{props.post.content}</span>
        {profile}
        {props.post.photo ? <img src={props.post.photo} /> : null}
        <button onClick={() => props.removePost(props.post.id)}>Delete Post</button>
        {props.editPostFormModal(props.post.id)}
    </li>
}

export default PostItem;
