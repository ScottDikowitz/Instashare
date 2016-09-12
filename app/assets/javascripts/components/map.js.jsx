var Map = React.createClass ({
  // mixins: [ReactRouter.History],
  getInitialState: function(){
    return {marker: []};
  },

  componentWillReceiveProps: function(newProps){
    this.state.marker.setMap(null);
    this.map.setCenter(newProps.location);
    var that = this;
    var marker = new google.maps.Marker({
        map: that.map,
        position: newProps.location
    });
    this.setState({marker: marker});
    var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(newProps.geometry.bounds.southwest.lat, newProps.geometry.bounds.southwest.lng),
      new google.maps.LatLng(newProps.geometry.bounds.northeast.lat, newProps.geometry.bounds.northeast.lng)
    );
    this.map.fitBounds(bounds);
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: this.props.location,
        zoom: 11
      };
      var that = this;
      this.map = new google.maps.Map(map, mapOptions);
      var marker = new google.maps.Marker({
          map: that.map,
          position: this.props.location
      });
      this.setState({marker: marker});
      var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(this.props.geometry.bounds.southwest.lat, this.props.geometry.bounds.southwest.lng),
        new google.maps.LatLng(this.props.geometry.bounds.northeast.lat, this.props.geometry.bounds.northeast.lng)
      );
      this.map.fitBounds(bounds);



  },

  render: function(){
    return <div className="map" ref="map"></div>;
  }
});
