import React from 'react';

import LocationStore from './../stores/location';
import TagStore from './../stores/tag';
import ApiUtil from './../util/api_util';
import Map from './map.js';

var LocationShow = React.createClass ({
  componentDidMount: function(){
    LocationStore.addChangeListener(this._changed);
    TagStore.addChangeListener(this._postsChanged);
    ApiUtil.fetchLocation(this.props.params.locationId);

  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchLocation(newProps.params.locationId);
  },

  _postsChanged: function(){
    this.setState({posts: TagStore.all()});
  },

  componentWillUnmount: function(){
    LocationStore.removeChangeListener(this._changed);
    TagStore.removeChangeListener(this._postsChanged);
  },

  _changed: function(){
    this.setState({ location: LocationStore.getLocation() });
    ApiUtil.fetchLocationPosts(this.props.params.locationId);
  },

  render: function(){
    var map;
    var tagPosts;
    var tagHeader;
    if (this.state){
      if (this.state.posts){
        tagHeader = <UserHeader curUser={this.state.posts}/>;
        tagPosts = <PostGrid posts={this.state.posts.posts}/>;
      }
      if (this.state.location){
          map = <div className="map-shield"><Map geometry={this.state.location.geometry} location={this.state.location.geometry.location}/></div>;
      }
    }
    return <div>
            {map}
            {tagHeader}
            {tagPosts}
          </div>;
  }
});


export default LocationShow;
