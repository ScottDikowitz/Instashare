import React from 'react';
import ApiUtil from './../util/api_util';
import CurrentUserStore from './../stores/current_user';
import FollowStore from './../stores/follow';

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
      if (CurrentUserStore.currentUser().username === this.props.curUser.username) {
        this.setState({input: true});
      }
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
    var stats;
    // if (!(this.props.curUser.tag_name) && !(this.props.curUser.place) && CurrentUserStore.currentUser().username !== this.props.curUser.username)
    if (CurrentUserStore.currentUser().username !== this.props.curUser.username && (typeof this.props.curUser.username !== "undefined")){
      button = <button className={this.state.buttonText === 'unfollow' ? 'follows following-button' : 'follows follow-button'}
          onClick={this.clickHandler}>{this.state.buttonText === 'unfollow' ? 'Following' : 'Follow'}</button>;
    }

    if (CurrentUserStore.currentUser().username === this.props.curUser.username && (typeof this.props.curUser.username !== "undefined")){
      file = <label className="file-select-label">Change pic<input className="file-select" type="file" onChange={this.changeFile} /></label>;

    }

    if (this.props.curUser.profile_picture){
      img = <div className="user-pic" style={{backgroundImage: `url(${this.props.curUser.profile_picture})`}}/>;
      body = <li onClick={this.updateBio} className="body-info">{this.props.curUser.body}</li>;
      stats = <li className="stats"><span className="num-stats">{this.props.curUser.numPosts}</span> posts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="num-stats">{this.props.curUser.numFollowers}</span> followers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="num-stats">{this.props.curUser.numFollowing}</span> following</li>;
    }
    if (this.state.input){
      body = "";
      editBio = <button className='update-bio' onClick={this.sendUpdate}>update!</button>;
      input = <textArea className="fields" onChange={this.handleType} onSubmit={this.handleUpdate}>{this.state.body}</textArea>;
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
                  <div style={{
                          display: 'flex'
                        , alignItems: 'center'
                      }}>
                  <span>{this.props.curUser.username}</span>
                  {button}
                  </div>
                  <li>{this.props.curUser.place}</li>
                  {tag}
                  {body}
                  {input}
                  {editBio}
                  {stats}
                </ul>
              </div>
           </div>;
  }

});

export default UserHeader;
