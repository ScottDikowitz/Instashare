(function(root) {
  root.PostForm = React.createClass ({

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
    // this.props.history.pushState(null, "/feed");
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
        that.setState({ imageUrl: reader.result });
        // debugger;
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: "" });
      }
    },

    handleClickLocation: function(e){

      var location = React.findDOMNode(this.refs.locationBox);
      location.value = e.currentTarget.innerHTML;
      this.setState({locations: []});

    },

  render: function(){
    var that = this;
    return <div className="modal">
            <div className="post-form-wrapper">
            <h1>Create Post</h1>
            <ul className="post-form group">
              <li className="add-photo group">
                <img src={this.state.imageUrl} />
              </li>
              <div className="post-form-right">
                <form autoComplete="off" onSubmit={this.handleSubmit} action="#" method="POST">
                  <label className="file-select-post">Upload Photo...<input className="file-select" type="file" onChange={this.changeFile} /></label>
                <input className="caption" placeholder="caption: create tags with #" type="text" name="caption"/>

                <input ref="locationBox" react onChange={this.handleLocations} className="caption" placeholder="enter a city, state or country" type="text" name="location"/>
                <ul className="search-results">{this.state.locations.map(function(location, idx){
                    return <li onClick={that.handleClickLocation} className="locations" key={idx}>{location}</li>;
                  })}</ul>
                <input className="create-post-button" type="submit" value="Post"/>


              </form>
            </div>
            </ul>
            <div className="post-form-footer"></div>
          </div>
          </div>;
  }

});
})(this);
