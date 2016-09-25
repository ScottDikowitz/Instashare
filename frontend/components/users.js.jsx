import React from 'react';
import ApiUtil from './../util/api_util';
import UsersStore from './../stores/users';

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

    var button = <button className={this.state.buttonText === 'unfollow' ? 'follows following-button' : 'follows follow-button'}
        onClick={()=>{}}
        style={{
            position: 'absolute',
            right: 0
        }}>{this.state.buttonText === 'unfollow' ? 'Following' : 'Follow'}</button>;
    return <div>
        <div className="users-content">
            <div className='discover-box' style={{margin: '0 auto'}}>
                <div className='discover'>DISCOVER PEOPLE</div>
                <ul className="user-list">
                    {loading}
                    {this.state.users.map(user => {
                        return <li key={user.id}  style={{position: 'relative', padding: 10, backgroundColor: '#fff'}}>
                            <div style={{position: 'relative'}}>
                                <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                                    <a href={"#/users/" + user.username} className="user-thumb" style={{backgroundImage: `url(${user.pic})`}}/>
                                    <a href={"#/users/" + user.username} className="name-box"><span className="uname">{user.username}</span></a>
                                </div>
                                {button}
                            </div>
                        </li>;
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
