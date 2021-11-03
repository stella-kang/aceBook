import React from 'react';
import EditPostFormContainer from './edit_post_form_container';

const PostItem = (props) => {

    let profile; 

    if (props.post.profile) {
        profile = <span>{props.post.profile.first_name} {props.post.profile.last_name}</span>
    } else {
        profile = null;
    }

    const handleDropdownClick = (e) => {
        e.stopPropagation();
        const postMenu = document.getElementById("post-dropdown-content");
        if (postMenu.style.display === "") {
            postMenu.style.display = "block";
        } else {
            postMenu.style.display = "";
        }
    }

    return <li className="post-item">
        <div className="post-header">
            <div id="post-details">
                {props.author.profile_picture ? <img src={props.author.profile_picture} /> : <img src={window.defaultProfile} />}
                <span>{props.author.first_name} {props.author.last_name}</span>
            </div>
            
            <div id="post-dropdown-menu" >
                <button id="post-dropdown-button" onClick={handleDropdownClick}>
                    <i className="fas fa-ellipsis-h fa-2x"></i>
                </button>

                <div id="post-dropdown-content">
                    <div>
                        <div className="post-dropdown-button">
                            <button onClick={() => props.removePost(props.post.id)}>
                                <i class="fas fa-edit"></i>
                                Delete post
                            </button>

                            {props.editPostFormModal(props.post.id)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {profile}

        <span>{props.post.content}</span>

        {props.post.photo ? <img src={props.post.photo} /> : null}
    </li>
}

export default PostItem;
