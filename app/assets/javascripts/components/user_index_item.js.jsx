(function(root) {
  root.UserIndexItem = React.createClass({

    render: function() {
      return (
        <li>
          <a onClick={this.props.callback} href={ "#/users/" + this.props.user.user.username }>
            { this.props.user.user.username }
          </a>
        </li>
      );
    }
  });
})(this);
