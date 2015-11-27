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

  changeFile: function(e){
    // e.preventDefault();
    var file = e.currentTarget.files[0];

    var formData = new FormData();

    if (typeof file !== "undefined") {
      formData.append("user[user_pic]", file);
    }

    ApiUtil.updateProfilePic(formData, this.props.curUser.username);
  },

  render: function(){
    var button;
    var file;
    var img;
    // if (!(this.props.curUser.tag_name) && !(this.props.curUser.place) && CurrentUserStore.currentUser().username !== this.props.curUser.username)
    if (CurrentUserStore.currentUser().username !== this.props.curUser.username && (typeof this.props.curUser.username !== "undefined")){
      button = <button onClick={this.clickHandler}>{this.state.buttonText}</button>;
    }

    if (CurrentUserStore.currentUser().username === this.props.curUser.username && (typeof this.props.curUser.username !== "undefined")){
      file = <label className="file-select-label">Change pic<input className="file-select" type="file" onChange={this.changeFile} /></label>;
    }

    if (this.props.curUser.profile_picture){
      img = <img className="user-pic" src={this.props.curUser.profile_picture}/>;
    }


    return <div className="user-header">
            <div className="label-and-user-pic">
              <div className="user-pic-container">
                {img}
              </div>
              {file}
            </div>
              <div>
                <ul className="account-info">
                  <li>{this.props.curUser.username}</li>
                  <li>{this.props.curUser.place}</li>
                  <li>{this.props.curUser.tag_name}</li>
                  <li>{this.props.curUser.body}</li>
                  {button}
                </ul>
              </div>
           </div>;
  }

});
