var Index = React.createClass ({
  getInitialState: function(){
    return {posts: [], page: 1, showModal: false, loading: true};
  },

  componentWillMount: function(){
    SessionsApiUtil.fetchCurrentUser();
  },

  componentDidMount: function(){
    ApiUtil.fetchPosts();
    PostStore.addChangeListener(this._changed);
    AnimationStore.addChangeHandler(this._animationChanged);
  },

  componentWillUnmount: function(){

    PostStore.removeChangeListener(this._changed);
    AnimationStore.removeChangeHandler(this._animationChanged);
  },

  _animationChanged: function(){
    this.setState({showModal: AnimationStore.modalShow()});
  },

  _changed: function(){
    this.setState({loading: false});
    this.setState({posts: PostStore.all()});

  },

  handleClick: function(){
    pageNumber = this.state.page + 1;
    ApiUtil.loadMorePosts(pageNumber);
    this.setState({page: this.state.page + 1});
  },

  handleModal: function(){
    if (!this.state.showModal){
      ApiActions.openModal();
    }
    else {
      ApiActions.closeModal();
    }
  },

  render: function(){
    var loadMore;
    var status;
    var postForm;
    var mScreen;
    var loading;
    if (this.state.loading){
      loading = <div className="spinner"></div>;
    }
  if (this.state.posts.length !== 0){
    loadMore = <div onClick={this.handleClick} className="load-more">
      <span>load more</span>
    </div>;
  }
  else {
    if (!this.state.loading){
      status = <div className="status">Nothing to show. Create a post or start following some users.</div>;
      }
  }

  if (this.state.showModal){
    postForm = <PostForm close={this.handleModal}/>;
  //   mScreen = <div onClick={this.handleModal} className="screen"></div>;
  }
    return <div className="posts-content-area">

            <div className="icon-new-post" onClick={this.handleModal} href="#feed"></div>
          {postForm}

            {loading}
            {this.state.posts.map(function(post){

              return <Post key={post.id} post={post}/>;

            })}
            {loadMore}
            {status}
          </div>;
  }

});
