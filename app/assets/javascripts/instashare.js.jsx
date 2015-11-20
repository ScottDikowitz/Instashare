(function() {
  $(document).ready(function(){
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
      <Route path="/" component={App}>
        <route path="/posts/new" component={PostForm}/>
        <route path="/signin" component={SessionForm}/>
        <route path="/users/:username" component={UserShow}/>
        <IndexRoute component={Index}/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

  });
})();
