import React from 'react'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            search: ""
        }
    }

    update(e) {
        this.setState({ 'search': e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.receiveSearch(this.state.search.toLowerCase());
        this.props.history.push(`/search/${this.state.search.toLowerCase()}`);
        this.setState({ search: ""})
    }

    render() {
        return <form id="search-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search aceBook" value={this.state.search} onChange={this.update}/>
            <button></button>
        </form>
    }
}

export default SearchForm;