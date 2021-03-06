import React from 'react';
import SearchItem from "./search_item"

class Search extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchFriendRequests(this.props.currentUserId)
        this.props.receiveSearch(this.props.match.params.searchTerm)
    }

    render() {
        let users = this.props.users.filter(user => { 
            let fullName = `${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}`;
            return fullName.includes(this.props.search);
        })

        return <div className="search-container">
            <div id="search-side-menu">
                <div id="search-heading">Search results</div>
            </div>

            {users.length !== 0 ? <ul className="search-results">
                {users.map(user => <SearchItem
                    user={user}
                    friendRequests={this.props.friendRequests}
                    currentUserId={this.props.currentUserId}
                    deleteFriendRequest={this.props.deleteFriendRequest}
                    createFriendRequest={this.props.createFriendRequest}
                    updateFriendRequest={this.props.updateFriendRequest}
                    key={user.id}
                    fetchMessages={this.props.fetchMessages}
                    createChat={this.props.createChat}
                    chats={this.props.chats}
                />)}
            </ul> : 
            <div id="no-results">
                <span>We didn't find any results</span>
                <span>Make sure everything is spelled correctly or try different keywords.</span>
            </div> }
        </div>
    }
}

export default Search;