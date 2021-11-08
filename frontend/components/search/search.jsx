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

        if (users.length !== 0) {
            return <ul className="search-results">
                {users.map(user => <SearchItem
                    user={user}
                    friendRequests={this.props.friendRequests}
                    currentUserId={this.props.currentUserId}
                    deleteFriendRequest={this.props.deleteFriendRequest}
                    createFriendRequest={this.props.createFriendRequest}
                    key={user.id}
                />)}
            </ul>
        } else {
            return <div>No search results.</div>
        }
    }
}

export default Search;