var UserHeader = React.createClass ({
  clickHandler: function(e){
    e.preventDefault();
    debugger;
    var follow = {follower_id: this.props.curUser.id};
    ApiUtil.followUser(follow);
  },

  render: function(){
    // debugger;
    return <div className="user-header">
              <figure>{this.props.curUser.user_pic}</figure>
              <div>
                <ul className="account-info">
                  <li>{this.props.curUser.username}</li>
                  <li>{this.props.curUser.body}</li>
                  <button onClick={this.clickHandler}>Follow</button>
                </ul>
              </div>
           </div>;
  }

});
