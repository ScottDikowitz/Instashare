var Map = React.createClass ({
  // mixins: [ReactRouter.History],

  componentWillReceiveProps: function(newProps){

    this.map.setCenter(newProps.location);
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: this.props.location,
        zoom: 11
      };
      var that = this;
      this.map = new google.maps.Map(map, mapOptions);



  },

  render: function(){
    return <div className="map" ref="map"></div>;
  }
});
