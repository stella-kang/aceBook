import React from "react";

const friendButton = (props) => {
    const handleClick = (e) => {
        props.action({
            
        })
    }

    return <button id="friend-button" onClick={handleClick}>

    </button>
}