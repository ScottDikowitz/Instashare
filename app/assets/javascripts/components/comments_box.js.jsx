var CommentsBox = React.createClass ({

  render: function(){
    // debugger;
    var comments;
      if (this.props.comments.length !== 0){
        comments = <ul>{this.props.comments.map(function(comment){
          return <li key={comment.id}>{comment}</li>;

        })}</ul>;
      }
    return <div>
            {comments}
            </div>;

  }

});
