import React from 'react';

var Notifications = React.createClass({
  getInitialState: function(){
    return ({notifications: {comments: [], likes: [], newFollowers: []}});
  },

  componentDidMount: function(){
    NotificationStore.addChangeHandler(this._changed);
    ApiUtil.getNotifications();
  },

  componentWillUnmount: function(){
    NotificationStore.removeChangeHandler(this._changed);
  },

  _changed: function(){
    this.setState({notifications: NotificationStore.getNotifications()});
  },

  render: function(){
    return <div className="centering"><br/>
            recent comments:
            {this.state.notifications.comments.map(function(comment, idx){
              return <div key={'comments' + idx}>{comment.content + ' ' + comment.created_at}</div>;
            })}
            <br/>
            recent likes:
            {this.state.notifications.likes.map(function(like, idx){
              return <div key={'likes' + idx}>{idx + 1}</div>;
            })}
            <br/>
            recent followers:
            {this.state.notifications.newFollowers.map(function(follow, idx){
              return <div key={'follows' + idx}>{follow.username}</div>;
            })}

          </div>;
  }
});

export default Notifications;
