var CommentsBox = React.createClass ({

  _changed: function(data){
    // this.setProps({comments: data});
    ApiUtil.fetchPosts();
  },

  render: function(){
    // debugger;
    var comments;
      if (this.props.comments.length !== 0){
        comments = <ul className="comment-box">{this.props.comments.map(function(comment){
          return <li key={comment.id}>
                  <ReactRouter.Link to={"/users/" + comment.username}>
                    {comment.username}
                  </ReactRouter.Link>
                  : {comment.content}
                  </li>;

        })}</ul>;
      }


    return <div>
            {comments}
            <CreateComment callback={this._changed} post_id={this.props.postId}/>
            </div>;

  }

});
