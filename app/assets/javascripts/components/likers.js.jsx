var Likers = React.createClass ({
  getInitialState: function(){
    return ({users: []});

  },

  handleClick: function(){

  },

  render: function(){
    var like = this.props.numLikes === 1 ? " Like" : " Likes";
    return <div className="like-bar">
            <li onClick={this.handleClick} className="num-likes">{this.props.numLikes + like}
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
