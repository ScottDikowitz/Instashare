var CommentsBox = React.createClass ({

  _changed: function(data){
    // this.setProps({comments: data});
    ApiUtil.fetchPosts();
  },

  render: function(){
    // debugger;
    var createComment;
    if (this.props.callback){
      createComment = <CreateComment callback={this.props.callback} post_id={this.props.postId}/>;
    }
    else{
      createComment = <CreateComment callback={this._changed} post_id={this.props.postId}/>;
    }
    var comments;
      if (this.props.comments.length !== 0){
        comments = <div>{this.props.comments.map(function(comment){
          return <li key={comment.id}>
                  <ReactRouter.Link to={"/users/" + comment.username}>
                    {comment.username}
                  </ReactRouter.Link>
                  : {comment.content}
                  </li>;

        })}</div>;
      }


    return <div>
            <ul className="comment-box">
              {comments}
            </ul>
              {createComment}
            </div>;

  }

});
