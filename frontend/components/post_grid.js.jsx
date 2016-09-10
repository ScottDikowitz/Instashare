var PostGrid = React.createClass ({


  render: function(){

    return <div className="post-grid group">
            {this.props.posts.map(function(post){

            return <PostGridSquare key={post.id} post={post} />;

          })}
          </div>;

  }


});
