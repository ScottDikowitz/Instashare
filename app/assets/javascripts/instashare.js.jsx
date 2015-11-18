(function() {
  $(document).ready(function(){
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;
    var App = React.createClass({
    render: function(){
      return (
          <div>
            <Header/>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <route path="/users/:username" component={UserShow}/>
        <IndexRoute component={Index}/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);



  });
})();
