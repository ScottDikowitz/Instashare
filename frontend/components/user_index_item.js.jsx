import React from 'react';
const ReactRouter = require('react-router');

var UserIndexItem = React.createClass({
    render: function() {
        const {user} = this.props.user;
      return (
        <a href={`#/users/${user.username}`} onClick={this.props.callback} style={{display: 'block'}}>
            <div className='background-img' style={{
                    backgroundImage: `url(${user.profile_picture})`
                  , display: 'inline-block'
                  , marginRight: 5
                  , verticalAlign: 'middle'
                  , borderRadius: '50%'
                  , width: 35, height: 35}}/>
            <span>{user.username}</span>
        </a>
      );
    }
  });

export default UserIndexItem;
