import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ApiActions from './../actions/api_actions';
import ApiUtil from './../util/api_util';

import LocationStore from './../stores/location';

var PostForm =  React.createClass ({

  getInitialState: function() {
      return {  imageUrl: "", locations: [] };
    },

  componentDidMount: function(){
    LocationStore.addChangeListener(this._changed);
  },

  componentWillUnmount: function(){
    LocationStore.removeChangeListener(this._changed);
  },

  _changed: function(){
    this.setState({locations: LocationStore.getLocations()});
  },

  handleSubmit: function(e){
    e.preventDefault();

    var file = e.currentTarget[0].files[0];
    file = file || this.state.file;
    var caption = e.currentTarget[1].value;
    var location = e.currentTarget[2].value;
    if (caption === ""){
      return;
    }

    var formData = new FormData();
    formData.append("post[caption]", caption);

    if (typeof file !== "undefined") {
      formData.append("post[image]", file);
    }

    if (typeof location !== "undefined") {
      formData.append("location", location);
    }

    ApiUtil.createPost(formData);
    this.props.close();
  },

  handleLocations: function(e){
    ApiUtil.fetchLocationsList(e.currentTarget.value);
  },

  changeFile: function(e) {
      var reader = new FileReader();
      var that = this;
      var file = e.currentTarget.files[0];

      reader.onloadend = function() {
        that.setState({ imageUrl: reader.result, file: file });
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: "" });
      }
    },

    handleClickLocation: function(e){

      var location = this.refs.locationBox;
      location.value = e.currentTarget.innerHTML;
      this.setState({locations: []});

    },

    handleClose: function(){
      ApiActions.closeModal();
    },

    drop: function (e) {
      e.preventDefault();




      var reader = new FileReader();
      var that = this;
      var file = e.dataTransfer.files[0];
      var upl = this.refs.photoUl;

      reader.onloadend = function() {
        that.setState({ imageUrl: reader.result, file: file });
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: "" });
      }
    },

    preventDefault: function (event) {
      event.preventDefault();
    },

  render: function(){
    var that = this;
    var imgUrl;
    if (this.state.imageUrl){
      imgUrl = <img src={this.state.imageUrl} />;
    }

    var mScreen = <div onClick={this.props.close} className="screen"></div>;

    return <div className="modal">
            <ReactCSSTransitionGroup transitionName="modal">
              {mScreen}
            </ReactCSSTransitionGroup>
            <div className="post-form-wrapper">
            <h1>Upload photo</h1>
            <ul className="post-form group">
              <li className="add-photo collapse-mobile">
                {imgUrl}
              </li>
              <p className="collapse-mobile">drag an image</p>
              <label htmlFor="photo" onDragOver={this.preventDefault} onDrop={this.drop} className="drag-drop collapse-mobile"></label>
              <div className="post-form-right">
                <form autoComplete="off" onSubmit={this.handleSubmit} action="#" method="POST">
                  <label className="icon-file-select-post"><input ref="photoUl" id="photo" className="file-select" type="file" onChange={this.changeFile} /></label>
                <input className="caption tagg" placeholder="caption: create tags with #" type="text" name="caption"/>
                <div style={{
                        position:'relative'
                    }}>
                <input ref="locationBox" react onChange={this.handleLocations} className="caption" placeholder="enter a city, state or country" type="text" name="location"/>
                    <ul className="search-results">{this.state.locations.map(function(location, idx){
                        return <li onClick={that.handleClickLocation} className="locations" key={idx}>{location}</li>;
                      })}</ul>
                </div>
                <input className="close-modal create-p" type="submit" value="Post"/>
              </form>
              <button className="close-modal" onClick={this.handleClose}>Close</button>
            </div>
            </ul>
            <div className="post-form-footer"></div>
          </div>
          </div>;
  }

});

export default PostForm;
