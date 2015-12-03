var Index = React.createClass ({
  getInitialState: function(){
    return {posts: [], page: 1, showModal: false};
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

  handleModal: function(){
    this.setState({showModal: !this.state.showModal});
  },

  render: function(){
    var loadMore;
    var status;
    var postForm;
    var mScreen;
  if (this.state.posts.length !== 0){
    loadMore = <div onClick={this.handleClick} className="load-more">
      <span>load more</span>
    </div>;
  }
  else {
    status = <div className="status">Nothing to show. Create a post or start following some users.</div>;
  }

  if (this.state.showModal){
    postForm = <PostForm close={this.handleModal}/>;
    mScreen = <div onClick={this.handleModal} className="screen"></div>;
  }
    return <div className="posts-content-area">

            <div className="new-post" onClick={this.handleModal} href="#feed"><span >+</span></div>
            {mScreen}
            {postForm}

            {this.state.posts.map(function(post){

              return <Post key={post.id} post={post}/>;

            })}
            {loadMore}
            {status}
          </div>;
  }

});
