import React from 'react'
import { withRouter } from 'react-router-dom'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push("./search")
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <i class="fas fa-arrow-left"></i>
            <input type="text" placeholder="Search aceBook"/>
            <button></button>
        </form>
    }
}

export default withRouter(SearchForm);