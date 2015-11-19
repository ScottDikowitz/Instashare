var PostForm = React.createClass ({

  handleSubmit: function(e){
    e.preventDefault();
    // debugger;
    var post = {caption: e.currentTarget[0].value, user_id: e.currentTarget[1].value };
    ApiUtil.createPost(post);
    this.props.history.pushState(null, "/");
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
              <input type="submit" value="make post"/>
            </form>
            </div>
          </div>;
  }

});
