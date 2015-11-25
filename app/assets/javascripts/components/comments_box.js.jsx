var CommentsBox = React.createClass ({

  _changed: function(data){
    // this.setProps({comments: data});
    // ApiUtil.fetchPosts();
  },

  render: function(){
    // debugger;

    var createComment;

    createComment = <CreateComment unlikeCallback={this.props.likeCallbacks[0]} likeCallback={this.props.likeCallbacks[1]} liked={this.props.liked} callback={this.props.callback} post_id={this.props.postId}/>;

    var comments;
    var usernameLink = <a href={"#/users/" + this.props.username}><span>{this.props.username}: </span></a>;

    var caption = <span>{this.props.caption.split(" ").map(function(word, index){
        if (word[0] === "#")
          return <a key={index} href={"#/tags/" + word.slice(1)}>{word} </a>;
        else
          return word + " ";


      })}
      </span>;
      var numLikes = this.props.numLikes;


      if (this.props.comments.length !== 0){
        comments = <div>{this.props.comments.map(function(comment){
          return <li key={comment.id}>
                  <a href={"#/users/" + comment.username}>{comment.username}</a>
                  : {comment.content}
                  </li>;

        })}</div>;
      }


    return <div>
            <ul className="comment-box">
              <li>Likes: {numLikes}</li>
              <li>{usernameLink}{caption}</li>
              {comments}
            </ul>
              {createComment}
            </div>;

  }

});
