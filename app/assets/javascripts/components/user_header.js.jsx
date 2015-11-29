var UserHeader = React.createClass ({
  getInitialState: function(){
    return {buttonText: this.props.curUser.follow_status, updateBio: false, input: false, body: this.props.curUser.body };
  },

  componentWillReceiveProps: function(newProps){
    this.setState({body: newProps.curUser.body});
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

  updateBio: function(){
    this.setState({input: true});
  },

  sendUpdate: function(e){
    ApiUtil.updateBio(this.state.body);
    this.setState({input: false, body: ""});
  },

  handleType: function(e){
    this.setState({body: e.currentTarget.value});
  },

  render: function(){
    var button;
    var file;
    var img;
    var editBio;
    var input;
    var tag;
    var body;
    // if (!(this.props.curUser.tag_name) && !(this.props.curUser.place) && CurrentUserStore.currentUser().username !== this.props.curUser.username)
    if (CurrentUserStore.currentUser().username !== this.props.curUser.username && (typeof this.props.curUser.username !== "undefined")){
      button = <button onClick={this.clickHandler}>{this.state.buttonText}</button>;
    }

    if (CurrentUserStore.currentUser().username === this.props.curUser.username && (typeof this.props.curUser.username !== "undefined")){
      file = <label className="file-select-label">Change pic<input className="file-select" type="file" onChange={this.changeFile} /></label>;
      editBio = <button onClick={this.updateBio}>edit bio</button>;

    }

    if (this.props.curUser.profile_picture){
      img = <img className="user-pic" src={this.props.curUser.profile_picture}/>;
      body = <li>{this.props.curUser.body}</li>;
    }
    if (this.state.input){
      body = "";
      editBio = <button onClick={this.sendUpdate}>update!</button>;
      input = <input className="fields" onChange={this.handleType} onSubmit={this.handleUpdate} type="text" value={this.state.body} />;
    }
    if (this.props.curUser.tag_name){
      tag = <li>#{this.props.curUser.tag_name}</li>;
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
                  {tag}
                  {body}
                  {input}
                  {editBio}
                  {button}

                </ul>
              </div>
           </div>;
  }

});
