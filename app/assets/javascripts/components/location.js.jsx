var LocationShow = React.createClass ({

  componentDidMount: function(){
    // ApiUtil.fetchLocation(this.props.params.locationId);

    // this needs to be in  api util on a callback after above finishes.
    that = this;
    var location = "Gainesville, FL, USA";
    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + "&key=AIzaSyAJGTQhnNdiql8vG1pvjQpxLouPkIrZJns",
      type: 'GET',
      dataType: 'json',
      success: function(location) {

        that.setState({location: location.results[0]});
      }
    });
  },


  render: function(){
    var map;
    if (this.state){
      debugger;
      map = <Map location={this.state.location.geometry.location}/>;
    }
    return <div>{map}</div>;
  }
});
