var CommentsBox = React.createClass ({

  _changed: function(data){
    // this.setProps({comments: data});
    // ApiUtil.fetchPosts();
  },

  checkUser: function(username) {
    return CurrentUserStore.currentUser().username == username ? "del-comment" : "hidden";
  },

  deleteComment: function(e){

    // this.
    ApiUtil.deleteComment(e.currentTarget.dataset.commId, this.props.callback);
  },

  render: function(){
    // debugger;

    var createComment;

    createComment = <CreateComment unlikeCallback={this.props.likeCallbacks[0]} likeCallback={this.props.likeCallbacks[1]} liked={this.props.liked} callback={this.props.callback} post_id={this.props.postId}/>;

    var comments;
    var usernameLink = <a href={"#/users/" + this.props.username}>{this.props.username} </a>;

    var caption = <span class="user-caption">{this.props.caption.split(" ").map(function(word, index){
        if (word[0] === "#"){
          return <a key={index} href={"#/tags/" + word.slice(1)}>{word} </a>;
          }
        else if (word[0] === "@"){
          return <a className="red-user" key={index} href={"#/users/" + word.slice(1)}>{word} </a>;
        }
        else{
          return word + " ";
        }

      })}
      </span>;
      var numLikes = this.props.numLikes;
      var userLikes = this.props.userLikes;

      var that = this;
      if (this.props.comments.length !== 0){
        comments = <div>{this.props.comments.map(function(comment){
          return <li className="comm-line" key={comment.id} >
                  <a href={"#/users/" + comment.username}>{comment.username}</a> {comment.content}
                  <div onClick={that.deleteComment} data-comm-id={comment.id} className={that.checkUser(comment.username)}>x</div></li>;

        })}</div>;
      }

    return <div>
              <Likers userLikes={userLikes} numLikes={numLikes}/>
            <ul className="comment-box">
              <li>{usernameLink}{caption}</li>
              {comments}
            </ul>
              {createComment}
            </div>;

  }

});
