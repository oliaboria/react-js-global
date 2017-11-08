import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../actions/SearchActions';
import { Search } from '../components/search/search';

function mapStateToProps(state) {
  return {
    movies: state.searchMovies
  };
}

function mapDispatchToProps(dispatch) {
  return {
      searchAction: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);