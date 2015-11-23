var PostForm = React.createClass ({

  getInitialState: function() {
      return {  imageUrl: "" };
    },

  handleSubmit: function(e){
    e.preventDefault();

    var caption = e.currentTarget[0].value;
    var file = e.currentTarget[2].files[0];
    var location = e.currentTarget[3].value;

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
                <label>Enter a caption.
                  <input className="caption" placeholder="add caption..." type="text" name="caption"/>
                </label>
                  <input type="hidden" name="user_id" value='1'/>
                  <input className="file-select" type="file" onChange={this.changeFile} />
                <label>location.
                  <input className="caption" placeholder="add location..." type="text" name="location"/>
                </label>
                  <input className="create-post-button" type="submit" value="Post"/>
              </form>
            </div>
            </div>
          </div>;
  }

});
