var LocationShow = React.createClass ({


  componentDidMount: function(){
    LocationStore.addChangeListener(this._changed);
    ApiUtil.fetchLocation(this.props.params.locationId);

    // this needs to be in  api util on a callback after above finishes.
    // that = this;
    // var location = "Gainesville, FL, USA";

  },

  componentWillUnmount: function(){
    LocationStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({ location: LocationStore.getLocation() });
  },

  render: function(){
    var map;
    if (this.state){
      map = <Map location={this.state.location.geometry.location}/>;
    }
    return <div>{map}</div>;
  }
});
