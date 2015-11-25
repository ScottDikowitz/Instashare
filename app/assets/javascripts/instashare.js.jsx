(function() {
  $(document).ready(function(){
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
      <Route path="/" component={App}>
        <route path="/posts/new" component={PostForm}/>
        <route path="/location/:locationId" component={LocationShow}/>
        <route path="/signin" component={SessionForm}/>
        <route path="/users" component={Users}/>
        <route path="/tags/:tagName" component={TagShow}/>
        <route path="/signup" component={SignUp}/>
        <route path="/posts/:postId" component={PostShow}/>
        <route path="/users/:username" component={UserShow}/>
        <Route path="/search" component={ Search } />
        <IndexRoute component={Index}/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

  });
})();
