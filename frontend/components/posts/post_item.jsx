import React from 'react';

const PostItem = (props) => {
    return <li>
        <span>{props.post.content}</span>
    </li>
}

export default PostItem;
