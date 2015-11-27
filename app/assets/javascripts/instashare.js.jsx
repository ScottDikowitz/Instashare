(function() {
  $(document).ready(function(){
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

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
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

  });
})();
