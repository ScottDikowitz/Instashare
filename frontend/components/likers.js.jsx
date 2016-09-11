import React from 'react';

var Likers = React.createClass ({
  getInitialState: function(){
    return ({users: []});
  },

  render: function(){
    var like = this.props.numLikes === 1 ? " Like" : " Likes";
    return<div className="like-bar">
            {this.props.numLikes + like} {this.props.userLikes.map(function(user){
              return <a key={user.id} href={"/#users/" + user.username}>{user.username}&nbsp; </a>;
            })}
          </div>;
  }
});

export default Likers;
