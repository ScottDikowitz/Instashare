var UserHeader = React.createClass ({
  getInitialState: function(){
    return {buttonText: this.props.curUser.follow_status };
  },

  componentDidMount: function(){
    FollowStore.addChangeListener(this._changed);
    ApiUtil.fetchFollowStatus(this.props.curUser);
  },

  componentWillUnmount: function(){
    FollowStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({buttonText: FollowStore.getFollow()});
  },

  clickHandler: function(e){
    e.preventDefault();
    var follow = {follower_id: this.props.curUser.id};
    if (this.state.buttonText === "follow"){
      ApiUtil.followUser(follow);
    }
    else if(this.state.buttonText === "unfollow") {
      // debugger;
      ApiUtil.unfollowUser(follow);
    }
  },

  render: function(){
    // debugger;
    var button;
    if (CurrentUserStore.currentUser().username !== this.props.curUser.username){
      button = <button onClick={this.clickHandler}>{this.state.buttonText}</button>;
    }


    return <div className="user-header">
              <figure>{this.props.curUser.user_pic}</figure>
              <div>
                <ul className="account-info">
                  <li>{this.props.curUser.username}</li>
                  <li>{this.props.curUser.body}</li>
                  {button}
                </ul>
              </div>
           </div>;
  }

});
