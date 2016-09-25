import React from 'react';
const ReactRouter = require('react-router');

var UserIndexItem = React.createClass({
    render: function() {
        const {user} = this.props.user;
      return (
        <li>
            <div className='background-img' style={{backgroundImage: `url(${user.profile_picture})`, width: 40, height: 40, display: 'inline-block', verticalAlign: 'middle'}}/>
          <ReactRouter.Link onClick={this.props.callback} to={"/users/" + user.username } style={{display: 'inline-block', verticalAlign: 'middle'}}>
            { user.username }
          </ReactRouter.Link>
        </li>
      );
    }
  });

export default UserIndexItem;
