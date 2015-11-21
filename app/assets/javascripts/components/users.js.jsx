var Users = React.createClass ({

  getInitialState: function(){
    return {users: []};
  },

  componentDidMount: function(){
    UsersStore.addChangeListener(this._changed);
    ApiUtil.fetchUserList();
  },

  _changed: function(){
    this.setState({users: UsersStore.all()});

  },

  render: function(){

    return <div>
        <h1>Users</h1>
      <ul className="user-list">
      {this.state.users.map(function(user){
        return <li key={user.id}>
                <a href={"#/users/" + user.username}>{user.username}
                </a>
              </li>;

      })}
      </ul>
    </div>;
  }
});
