var Likers = React.createClass ({
  getInitialState: function(){
    return ({users: []});

  },

  handleClick: function(){

  },

  render: function(){

    return <div className="like-bar">
            <li onClick={this.handleClick} className="num-likes">Likes: {this.props.numLikes}
            </li>

            <ul>
              {this.props.userLikes.map(function(user){
                return <li className="user-likes" key={user.id}>
                  <a href={"/#users/" + user.username}>{user.username}</a>&nbsp;</li>;

              })}
            </ul>
          </div>;
  }


});
