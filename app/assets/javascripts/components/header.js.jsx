var Header = React.createClass ({

  render: function(){
    return <div>
            <div className="header">
              <div className="header-nav">
              <ReactRouter.Link to={"/"}>
                <span className="logo">Instashare</span>
              </ReactRouter.Link>

              <ReactRouter.Link to={"/users/" + CurrentUserStore.currentUser().username}>
                <span className="current-user">{CurrentUserStore.currentUser().username}</span>
              </ReactRouter.Link>

              </div>
            </div>
          </div>;
  }
});
