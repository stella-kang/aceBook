import React from 'react';
import { withRouter } from 'react-router-dom'

class NewsfeedFriendItem extends React.Component {
    
    render() {
        // return <li onClick={() => this.props.history.push(`/${this.props.friend.id}/profile`)}>
        //     {this.props.friend.profile_picture ? <img src={this.props.friend.profile_picture}/> : <img src={window.defaultProfile}/>}
        //     <span>{this.props.friend.first_name} {this.props.friend.last_name}</span>
        // </li>

        return <li>
            {this.props.friend.profile_picture ? <img src={this.props.friend.profile_picture} /> : <img src={window.defaultProfile} />}
            <span>{this.props.friend.first_name} {this.props.friend.last_name}</span>
        </li>
    }
}

export default withRouter(NewsfeedFriendItem);