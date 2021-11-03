import React from 'react';
import EditPostFormContainer from './edit_post_form_container';

const PostItem = (props) => {

    let profile; 

    if (props.post.profile) {
        profile = <span>{props.post.profile.first_name} {props.post.profile.last_name}</span>
    } else {
        profile = null;
    }

    return <li>
        <span>{props.post.content}</span>
        <span>{props.post.author.first_name} {props.post.author.last_name}</span>
        {profile}
        {props.post.photo ? <img src={props.post.photo} /> : null}
        <button onClick={() => props.removePost(props.post.id)}>Delete Post</button>
        <EditPostFormContainer postId={props.post.id}/>
    </li>
}

export default PostItem;
