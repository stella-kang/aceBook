import React from 'react';

class Search extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        let users = this.props.users.filter(user => user.first_name.toLowerCase().includes(this.props.search) || user.last_name.toLowerCase().includes(this.props.search))

        return <ul>
            {users.map(user => <div>{user.first_name}</div>)}
        </ul>
    }
}

export default Search;