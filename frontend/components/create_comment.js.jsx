import React from 'react';

var CreateComment = React.createClass ({

  handleSubmit: function(e){
    e.preventDefault();
    var comment = {content: e.currentTarget[0].value, post_id: this.props.post_id };
    ApiUtil.createComment(comment, this.props.callback);
    e.currentTarget[0].value = "";

  },

  handleLike: function(e){
  e.preventDefault();
  ApiUtil.createLike(this.props.post_id, this.props.likeCallback);

},

  handleUnlike: function(e){
    e.preventDefault();
    ApiUtil.removeLike(this.props.post_id, this.props.unlikeCallback);
  },

  render: function(){
    var button;
    if (this.props.liked === "liked"){
      button = <button className="like-button" onClick={this.handleUnlike}><i className="icon-heart-red"></i></button>;
    }
    else{
      button = <button className="like-button" onClick={this.handleLike}><i className="icon-heart-gray"></i></button>;
    }
    return <div>
            <div className="create-comment">
              {button}
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="create-comment-text" name="content" placeholder="add comment..."/>
              </form>
            </div>
          </div>;
  }
});

export default CreateComment;
