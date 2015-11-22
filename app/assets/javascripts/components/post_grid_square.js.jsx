var PostGridSquare = React.createClass ({
  // mixins: [ReactRouter.History],

  // handleClick: function(e){
  //   this.history.pushState(null, '/posts/' + this.props.post.id);
  // },


  render: function(){
    return <a href={"#/posts/" + this.props.post.id} className="post-grid-square"><img src={this.props.post.image}/></a>;
  }
});
