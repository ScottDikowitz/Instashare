import React from 'react';
const ReactRouter = require('react-router');

var UserIndexItem = React.createClass({
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

export default UserIndexItem;
