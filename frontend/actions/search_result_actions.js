import SearchResultConstants from './../constants/search_results_constants';
import dispatcher from './../dispatcher/dispatcher';

var SearchResultActions = {
  receiveResults: function (results) {
    dispatcher.dispatch({
      actionType: SearchResultConstants.RECEIVE_RESULTS,
      results: results
    });
  }
};

export default SearchResultActions;
