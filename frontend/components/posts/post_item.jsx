import React from 'react';

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
    </li>
}

export default PostItem;
