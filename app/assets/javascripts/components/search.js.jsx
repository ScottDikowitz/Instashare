(function(root) {
  root.Search = React.createClass({

    mixins: [ReactRouter.History],

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
      var search = React.findDOMNode(this.refs.search);
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
        <div className="search-container">
          <div className="search-bar"><div className="icon-search"></div>
            <input ref="search" type="text"
              onChange={ this._onInput }
              placeholder="search..."
            />
            <ul className="search-results">
              { results }
            </ul>
          </div>
        </div>
      );
    },

  });
})(this);
