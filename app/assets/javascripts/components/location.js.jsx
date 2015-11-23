var LocationShow = React.createClass ({

  componentDidMount: function(){
    // ApiUtil.fetchLocation(this.props.params.locationId);

    // this needs to be in  api util on a callback after above finishes.
    that = this;
    var location = "gainesville";
    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + "&key=AIzaSyAJGTQhnNdiql8vG1pvjQpxLouPkIrZJns",
      type: 'GET',
      dataType: 'json',
      success: function(post) {

        that.setState({location: post.results[0].geometry.location});
      }
    });
  },


  render: function(){
    var map;
    if (this.state){
      map = <Map location={this.state.location}/>;
    }
    return <div>{map}</div>;
  }
});
