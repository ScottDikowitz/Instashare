import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';

import App from './components/app.js';
import AppIndex from './components/app_index.js';
import LocationShow from './components/location.js';
import Notifications from './components/Notifications.js';
import PostForm from './components/post_form.js';
import PostShow from './components/post_show.js';
import Search from './components/search.js';
import SessionForm from './components/new_session.js';
import SignUp from './components/sign_up.js';
import UserShow from './components/user.js';
import TagShow from './components/tag_show.js';
import Users from './components/users.js';

(function() {
  $(document).ready(function(){
    var root = document.getElementById('content');

  var routes = (
      <Route path="/" component={App}>
        <Route path="feed" component={AppIndex}>
          <Route path="post/new" component={PostForm}/>
        </Route>
        <Route path="/location/:locationId" component={LocationShow}/>
        <Route path="/signin" component={SessionForm}/>
        <Route path="/users" component={Users}/>
        <Route path="/tags/:tagName" component={TagShow}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/posts/:postId" component={PostShow}/>
        <Route path="/users/:username" component={UserShow}/>
        <Route path="/search" component={ Search } />
        <Route path="/notifications" component={ Notifications } />
      </Route>
  );
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, root);

  });
})();
