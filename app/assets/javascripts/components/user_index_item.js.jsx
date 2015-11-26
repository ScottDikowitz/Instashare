(function(root) {
  root.UserIndexItem = React.createClass({

    render: function() {
      return (
        <li>
          <ReactRouter.Link onClick={this.props.callback} to={"/users/" + this.props.user.user.username }>
            { this.props.user.user.username }
          </ReactRouter.Link>
        </li>
      );
    }
  });
})(this);
