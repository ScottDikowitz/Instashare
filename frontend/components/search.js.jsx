import React from 'react';
import SearchResultsStore from './../stores/search_results';
import SearchResultActions from './../actions/search_result_actions';
import SearchApiUtil from './../util/search_api_util';
import LocationIndexItem from './location_index_item.js';
import TagIndexItem from './tag_index_item.js';
import UserIndexItem from './user_index_item.js';
var Search = React.createClass({
    getInitialState: function () {
        return {search: false};
    },

    componentDidMount: function () {
      SearchResultsStore.addChangeHandler(this._onChange);
    },

    componentWillUnmount: function () {
      SearchResultsStore.removeChangeHandler(this._onChange);
    },

    _onChange: function () {
      this.setState({results: SearchResultsStore.results()});
    },

    _onInput: function (e) {
      e.preventDefault();
      var query = $(e.currentTarget).val();
      if (query.length > 2){
        SearchApiUtil.search(
          query
        );
      }
      else{
        SearchResultActions.receiveResults({results: []});
      }
    },

    resetForm: function(){
      var search = this.refs.search;
      search.value= "";
      SearchResultActions.receiveResults({results: []});
    },

    render: function() {
      var that = this;
      var results = SearchResultsStore.results().map(function (result) {
        if (result._type === "User") {
          return <UserIndexItem callback={that.resetForm} key={result.user.id} user={ result } />;
        } else if(result._type === "Location") {
          return <LocationIndexItem callback={that.resetForm} key={result.location.id} location={ result } />;
        }
        else if (result._type === "Tag") {
          return <TagIndexItem callback={that.resetForm} key={result.tag.id} tag={ result } />;
        }
      });

      return (
          <div className="search-bar">
            <div className="search-wrapper">
                {!this.state.search ? <div onClick={ ()=>this.setState({search: true}) }
                    style={{cursor: 'text', zIndex: 1, height: '100%', width: '100%', textAlign: 'center', lineHeight: '28px', backgroundColor: '#FAFAFA'}}>
                    <div className="icon-search"/>
                    <div style={{color: '#999', display: 'inline-block'}}>Search</div>
                </div> :
                <input autoFocus ref="search" type="text"
                  onChange={ this._onInput }
                  onBlur={ ()=>this.setState({search: false}) }
                />}
            </div>
            <ul className="search-results">
              { results }
            </ul>
          </div>
      );
    },

  });

export default Search;
