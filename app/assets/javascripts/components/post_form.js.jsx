(function(root) {
  root.PostForm = React.createClass ({

  getInitialState: function() {
      return {  imageUrl: "" };
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

  render: function(){

    return <div className="modal modal-screen">
            <h1>Create Post</h1>
            <ul className="post-form group">
              <li className="add-photo group">
                <img src={this.state.imageUrl} />
              </li>
              <div className="post-form-right">
                <form  onSubmit={this.handleSubmit} action="#" method="POST">
                  <label className="file-select-post">Upload Photo...<input className="file-select" type="file" onChange={this.changeFile} /></label>
                <input className="caption" placeholder="caption: create tags with #" type="text" name="caption"/>

                <input className="caption" placeholder="enter a city, state or country" type="text" name="location"/>

                <input className="create-post-button" type="submit" value="Post"/>


              </form>
            </div>
            </ul>
          </div>;
  }

});
})(this);
