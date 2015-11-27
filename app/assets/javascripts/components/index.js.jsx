var Index = React.createClass ({
  getInitialState: function(){
    return {posts: [], page: 1};
  },

  componentWillMount: function(){
    SessionsApiUtil.fetchCurrentUser();
  },

  componentDidMount: function(){
    ApiUtil.fetchPosts();

    PostStore.addChangeListener(this._changed);
  },

  componentWillUnmount: function(){

    PostStore.removeChangeListener(this._changed);

  },

  _changed: function(){

    this.setState({posts: PostStore.all()});

  },

  handleClick: function(){
    pageNumber = this.state.page + 1;
    ApiUtil.loadMorePosts(pageNumber);
    this.setState({page: this.state.page + 1});
  },


  render: function(){
    var loadMore;
    var status;
  if (this.state.posts.length !== 0){
    loadMore = <div onClick={this.handleClick} className="load-more">
      <span>load more</span>
    </div>;
  }
  else {
    status = <div className="status">Nothing to show. Create a post or follow a user.</div>;
  }

    return <div className="posts-content-area">
              <ReactRouter.Link className="new-post" to={"/posts/new"}>
                <span >+</span>
              </ReactRouter.Link>
            {this.state.posts.map(function(post){

              return <Post key={post.id} post={post}/>;

            })}
            {loadMore}
            {status}
          </div>;
  }

});
