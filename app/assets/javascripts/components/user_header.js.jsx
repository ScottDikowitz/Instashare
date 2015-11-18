var UserHeader = React.createClass ({


  render: function(){
    // debugger;
    return <div className="user-header">
              <figure>{this.props.curUser.user_pic}</figure>
              <div>
                <ul className="account-info">
                  <li>{this.props.curUser.username}</li>
                  <li>{this.props.curUser.body}</li>
                </ul>
              </div>
           </div>;
  }

});
