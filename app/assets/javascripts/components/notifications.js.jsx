var Notifications = React.createClass({
  getInitialState: function(){
    return ({notifications: []});
  },

  componentDidMount: function(){
    NotificationStore.addChangeHandler(this._changed);
    ApiUtil.getNotifications();
  },

  componentWillUnmount: function(){
    NotificationStore.removeChangeHandler(this._changed);
  },

  _changed: function(){
    this.setState({notifications: NotificationStore.notifications()});
  },

  render: function(){
    return <div className="centering">Hello!
            {this.state.notifications.map(function(notification, idx){
              return <div>{idx}</div>;
            })}

          </div>;
  }

});
