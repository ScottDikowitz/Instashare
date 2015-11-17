var Index = React.createClass ({
  getInitialState: function(){
    return {posts: []};
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

  render: function(){
    return <div>
            {this.state.posts.map(function(post){

              return <Post key={post.id} post={post}/>;

            })}
          </div>;
  }

});
