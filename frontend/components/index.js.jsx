import React from 'react';
import ApiActions from './../actions/api_actions';
import ApiUtil from './../util/api_util';
import {readCookie} from './../util/cookie';
import JoyrideStore from './../stores/joyride';
import SessionsApiUtil from '../util/sessions_api_util';
import Steps from './../steps';
import PostStore from './../stores/post';
import PostForm from './post_form.js';
import Post from './post.js';
import AnimationStore from './../stores/animation';
import 'react-joyride/lib/styles/react-joyride-compiled.css';

var Index = React.createClass ({
  getInitialState: function(){
    return {posts: [], page: 1, showModal: false, loading: true, addStep: false};
  },

  componentWillMount: function(){
    SessionsApiUtil.fetchCurrentUser();
  },

  componentDidMount: function(){
    ApiUtil.fetchPosts();
    PostStore.addChangeListener(this._changed);
    JoyrideStore.addChangeListener(this._changed);
    AnimationStore.addChangeHandler(this._animationChanged);
  },

  componentDidUpdate: function(prevProps, prevState) {

      if (!prevState.addStep && this.state.addStep){
          var that = this;
          if (!readCookie('index-walkthrough')){
             setTimeout(function(){that.state.addStep(Steps.feed);}, 2000);
         }
      }
  },

  componentWillUnmount: function(){

    PostStore.removeChangeListener(this._changed);
    JoyrideStore.removeChangeListener(this._changed);
    AnimationStore.removeChangeHandler(this._animationChanged);
  },

  _animationChanged: function(){
    this.setState({showModal: AnimationStore.modalShow()});
  },

  _changed: function(){
    this.setState({loading: false});
    this.setState({posts: PostStore.all()});
    this.setState({addStep: JoyrideStore.getFunc()});

  },

  handleClick: function(){
    var pageNumber = this.state.page + 1;
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
  }
    return <div className="posts-content-area">
            {!this.state.loading && <div style={{textAlign: 'center'}}><div className="new-post" onClick={this.handleModal}>+</div></div>}
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

export default Index;
