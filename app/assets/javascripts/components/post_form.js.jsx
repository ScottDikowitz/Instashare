var PostForm = React.createClass ({

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
    this.props.history.pushState(null, "/");
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

    return <div >
            <h1>Create Post</h1>
            <div className="post-form group">
              <div className="add-photo">
                <img src={this.state.imageUrl} />
              </div>
              <div className="post-form-right">
                <form  onSubmit={this.handleSubmit} action="#" method="POST">
                  <input className="file-select" type="file" onChange={this.changeFile} />
                <input className="caption" placeholder="caption: create tags with #" type="text" name="caption"/>

                <input className="caption" placeholder="enter a city, state or country" type="text" name="location"/>

                <input className="create-post-button" type="submit" value="Post"/>


              </form>
            </div>
            </div>
          </div>;
  }

});
