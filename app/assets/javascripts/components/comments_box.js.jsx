var CommentsBox = React.createClass ({

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
            </div>;

  }

});
