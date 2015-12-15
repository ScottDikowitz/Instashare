var Users = React.createClass ({

  getInitialState: function(){
    return {users: [], page: 1};
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
    if (UsersStore.all().length !== 0){
      this.setState({users: UsersStore.all()});
    }
    else {
      this.setState({page: this.state.page - 1});
    }
  },

  handleNext: function(){
    // debugger;
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

    return <div>
        <div className="users-content">
            <h1>Users</h1>
          <ul className="user-list">
          {this.state.users.map(function(user){
            return <li key={user.id}>
                    <a href={"#/users/" + user.username} className="group">
                      <img className="user-thumb" src={user.pic}/>
                      <span className="uname">{user.username}</span>
                      <span className="body">{user.body}</span>
                    </a>
                  </li>;

          })}
          </ul>
          <a href="#/users" onClick={this.handlePrev}>Prev</a>|
          <a href="#/users" onClick={this.handleNext}>Next</a>
      </div>
    </div>;
  }
});
