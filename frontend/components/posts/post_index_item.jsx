import React from 'react';

const PostIndexItem = (props) => {
    return <li>
        <span>{props.post.content}</span>
    </li>
}

export default PostIndexItem;
