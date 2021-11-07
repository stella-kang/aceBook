import { connect } from "react-redux";
import { receiveSearch } from "../../actions/search_action";
import { withRouter } from 'react-router-dom'
import SearchForm from "./search_form";

const mDTP = (dispatch, ownProps) => ({
    receiveSearch: (search) => dispatch(receiveSearch(search))
})

export default withRouter(connect(null, mDTP)(SearchForm));