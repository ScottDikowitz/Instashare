import React from 'react';
import ApiUtil from './../util/api_util';
import UsersStore from './../stores/users';
import UserListItem from './UserListItem';
import ApiActions from './../actions/api_actions';

var Users = React.createClass ({

  getInitialState: function(){
    return {users: [], page: 1, loading: true};
  },

  componentWillReceiveProps: function(newProps){

  },

  componentDidMount: function(){
    UsersStore.addChangeListener(this._changed);
    ApiUtil.fetchUserList(this.state.page);
  },

  componentWillUnmount: function(){
    UsersStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({loading: false});
    if (UsersStore.all().length !== 0){
      this.setState({users: UsersStore.all()});
    }
    else {
      this.setState({page: this.state.page - 1});
    }
  },

  followUser: function(user) {
      var follow = {follower_id: user};
      ApiUtil.followUser(follow, ApiActions.updateFollowStatus);
  },

  unfollowUser: function(user) {
      var follow = {follower_id: user};
      ApiUtil.unfollowUser(follow, ApiActions.updateFollowStatus);
  },

  handleNext: function(){
      ApiUtil.fetchUsersPage(this.state.page + 1);
      this.setState({page: this.state.page + 1});

  },

  handlePrev: function(){
    if (this.state.page !== 1){
      ApiUtil.fetchUsersPage(this.state.page - 1);
      this.setState({page: this.state.page - 1});
    }
  },

  render: function(){
    var loading;
    if (this.state.loading){
      loading = <div className="spinner"></div>;
    }

    return <div>
        <div className="users-content">
            <div className='discover-box' style={{margin: '0 auto'}}>
                <div className='discover'>DISCOVER PEOPLE</div>
                <ul className="user-list">
                    {loading}
                    {this.state.users.map(user => {
                        return <UserListItem key={`user-${user.id}`}
                            user={user}
                            followUser={this.followUser}
                            unfollowUser={this.unfollowUser}/>;
                  })}
                </ul>
                <a href="#/users" onClick={this.handlePrev}>Prev</a>|
                <a href="#/users" onClick={this.handleNext}>Next</a>
          </div>
      </div>
    </div>;
  }
});

export default Users;
