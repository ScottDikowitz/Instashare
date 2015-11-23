var Map = React.createClass ({
  // mixins: [ReactRouter.History],

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: this.props.location,
        zoom: 11
      };
      var that = this;
      this.map = new google.maps.Map(map, mapOptions);

      var marker = new google.maps.Marker({
        position: this.props.location,
        map: this.map,
        title: 'Click to zoom'
      });

  },

  render: function(){
    return <div className="map" ref="map"></div>;
  }
});
