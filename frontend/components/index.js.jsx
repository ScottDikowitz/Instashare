import React from 'react';
import ApiActions from './../actions/api_actions';
import ApiUtil from './../util/api_util';
import {createCookie, readCookie} from './../util/cookie';
import WalkthroughStore from './../stores/walkthrough';
import SessionsApiUtil from '../util/sessions_api_util';
import Steps from './../steps';
import PostStore from './../stores/post';
import PostForm from './post_form.js';
import Post from './post.js';
import Joyride from 'react-joyride';
import AnimationStore from './../stores/animation';
import 'react-joyride/lib/styles/react-joyride-compiled.css';

class Index extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            posts: [],
            page: 1,
            showModal: false,
            loading: true,
            steps: []
        };

        this._animationChanged = this._animationChanged.bind(this);
        this._changed = this._changed.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    componentDidMount (){
        SessionsApiUtil.fetchCurrentUser();
        ApiUtil.fetchPosts();
        PostStore.addChangeListener(this._changed);
        WalkthroughStore.addChangeListener(this._changed);
        AnimationStore.addChangeHandler(this._animationChanged);
    }

    componentWillUnmount (){
        PostStore.removeChangeListener(this._changed);
        WalkthroughStore.removeChangeListener(this._changed);
        AnimationStore.removeChangeHandler(this._animationChanged);
    }

    _animationChanged (){
        this.setState({showModal: AnimationStore.modalShow()});
    }

    _changed (){
        this.setState({loading: false});
        this.setState({posts: PostStore.all()});
        this.setState({steps: WalkthroughStore.getSteps()});
    }

    handleClick (){
        var pageNumber = this.state.page + 1;
        ApiUtil.loadMorePosts(pageNumber);
        this.setState({page: this.state.page + 1});
    }

    handleModal (){
        if (!this.state.showModal){
            ApiActions.openModal();
        }
        else {
            ApiActions.closeModal();
        }
    }

    render (){
        const hasPosts = this.state.posts.length !== 0;

        return (
            <div className="posts-content-area">
                <Joyride ref={$el => {
                    if ($el && !readCookie('index-walkthrough')) {
                        $el.start();
                    }
                }}
                callback={ e => {
                    if (e.type === 'finished') {
                        createCookie('index-walkthrough', 'true');
                    }
                }}
                steps={this.state.steps}
                type="continuous"
                showStepsProgress={true}
                showSkipButton={true}
                showStepsProgress={true} />
                {!this.state.loading && <div style={{textAlign: 'center'}}>
                    <div className="new-post" onClick={this.handleModal}>+</div>
                </div>}
                {this.state.showModal && <PostForm close={this.handleModal}/>}
                {this.state.loading && <div className="spinner"/>}
                {this.state.posts.map(function(post){
                    return <Post key={post.id} post={post}/>;
                })}
                {hasPosts &&
                    <div onClick={this.handleClick} className="load-more">
                        <span>load more</span>
                </div>}
                {!hasPosts && !this.state.loading &&
                    <div className="status">Nothing to show. Create a post or start following some users.
                </div>}
            </div>
        );
    }
}

export default Index;
