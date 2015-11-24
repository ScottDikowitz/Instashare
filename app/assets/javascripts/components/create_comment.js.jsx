var CreateComment = React.createClass ({

  handleSubmit: function(e){
    e.preventDefault();
    // debugger;
    var comment = {content: e.currentTarget[0].value, post_id: this.props.post_id };
    ApiUtil.createComment(comment, this.props.callback);
    e.currentTarget[0].value = "";

  },

  handleLike: function(e){
  e.preventDefault();
  ApiUtil.createLike(this.props.post_id);

},

  render: function(){
    if (this.props.liked === "liked"){

    }
    return <div>
            <div className="create-comment">
              <button className="like-button" onClick={this.handleLike}>O</button>
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="create-comment-text" name="content" placeholder="add comment..."/>
                <input type="submit" value="add"/>
              </form>
            </div>
          </div>;
  }
});
