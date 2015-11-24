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
  ApiUtil.createLike(this.props.post_id, this.props.callback);

},

  handleUnlike: function(e){
    e.preventDefault();
    ApiUtil.removeLike(this.props.post_id, this.props.callback);
  },

  render: function(){
    var button;
    if (this.props.liked === "liked"){
      button = <button className="like-button liked" onClick={this.handleUnlike}></button>;
    }
    else{
      button = <button className="like-button unliked" onClick={this.handleLike}></button>;
    }
    return <div>
            <div className="create-comment">
              {button}
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="create-comment-text" name="content" placeholder="add comment..."/>
                <input type="submit" value="add"/>
              </form>
            </div>
          </div>;
  }
});
