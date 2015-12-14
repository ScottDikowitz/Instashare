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
    this.setState({users: UsersStore.all()});

  },

  handlePage: function(){
    // debugger;
        ApiUtil.fetchUsersPage(this.state.page + 1);
    this.setState({page: this.state.page + 1});

  },

  render: function(){

    return <div>
        <h1>Users</h1>
      <ul className="user-list">
      {this.state.users.map(function(user){
        return <li key={user.id}>
                <a href={"#/users/" + user.username}>{user.username}
                  <span className="body">id: {user.id}</span>
                </a>
              </li>;

      })}
      </ul>
      <a href="#/users"  onClick={this.handlePage}>Next</a>
    </div>;
  }
});
