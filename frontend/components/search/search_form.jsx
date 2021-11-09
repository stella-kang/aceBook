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

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname.includes("search") && !this.props.location.pathname.includes("search")) this.setState({ 'search': ""});
    }

    update(e) {
        this.setState({ 'search': e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.receiveSearch(this.state.search.toLowerCase());
        this.props.history.push(`/search/${this.state.search.toLowerCase()}`);
        document.getElementById('search-input').blur();
    }

    handleRemoveLogo(e) {
        e.stopPropagation();

        const logo = document.getElementById("logo");
        logo.style.opacity = 0;
        logo.style.width = 0;
        logo.style.visibility = "hidden";
    }

    render() {
        return <form id="search-form" onSubmit={this.handleSubmit}>
            <i className="fas fa-search"></i>
            <input type="text" id="search-input" placeholder="Search aceBook" value={this.state.search} onChange={this.update} onClick={this.handleRemoveLogo}/>
            <button></button>
        </form>
    }
}

export default SearchForm;