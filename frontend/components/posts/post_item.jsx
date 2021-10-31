import React from 'react';

const PostItem = (props) => {

    let profile; 

    if (props.post.profile) {
        profile = <span>{props.post.profile}</span>
    } else {
        profile = null;
    }
    return <li>
        <span>{props.post.content}</span>
        <span>{props.post.author.username}</span>
        {profile}
    </li>
}

export default PostItem;
