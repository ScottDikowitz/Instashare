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
            <header><h1>Instashare</h1></header>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <route path="/users/:userId" component={UserShow}/>
        <IndexRoute component={Index}/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);



  });
})();
