import React from 'react';
import { withRouter } from 'react-router-dom'

const NewsfeedFriendItem = (props) => {
    return <div>
        {props.friend.profile_picture ? <img src={props.friend.profile_picture} /> : <img src={window.defaultProfile} />}
        <span>{props.friend.first_name} {props.friend.last_name}</span>
    </div>
}

export default withRouter(NewsfeedFriendItem);