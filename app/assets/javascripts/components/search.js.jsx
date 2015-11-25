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
      SearchApiUtil.search(
        query
      );
    },

    render: function() {
      var results = SearchResultsStore.results().map(function (result) {
        if (result._type === "User") {
          return <UserIndexItem key={result.user.id} user={ result } />;
        } else {
          return <PostIndexItem post={ result } />;
        }
      });

      return (
        <div>
          <li className="search-bar">
          <input type="text"
            onChange={ this._onInput }
            placeholder="search..."
          />
        </li>

          <ul className="search-results">
            { results }
          </ul>
        </div>
      );
    },

  });
})(this);
