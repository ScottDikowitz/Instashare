var PostForm = React.createClass ({

  handleSubmit: function(e){
    e.preventDefault();

    var caption = e.currentTarget[0].value;
    var file = e.currentTarget[2].files[0];

    var formData = new FormData();
    formData.append("post[caption]", caption);

    if (typeof file !== "undefined") {
      formData.append("post[image]", file);
    }


    ApiUtil.createPost(formData);
    this.props.history.pushState(null, "/");
  },

  changeFile: function(e){
  },

  render: function(){

    return <div >
            <h1>Create Post</h1>
            <div className="post-form">
              <button className="add-photo">Upload a photo.</button>
            <form  onSubmit={this.handleSubmit} action="#" method="POST">
              <label>Enter a caption.
              <input type="text" name="caption"/>
              </label>
              <input type="hidden" name="user_id" value='1'/>
              <input type="file" onChange={this.changeFile} />
              <input type="submit" value="make post"/>
            </form>
            </div>
          </div>;
  }

});
