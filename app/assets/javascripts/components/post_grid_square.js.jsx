var PostGridSquare = React.createClass ({
  // mixins: [ReactRouter.History],

  // handleClick: function(e){
  //   this.history.pushState(null, '/posts/' + this.props.post.id);
  // },


  render: function(){
    return <a href={"#/posts/" + this.props.post.id} className="post-grid-square"><span className="square-info">1❤  1✉</span><div className="square-hover"><img className="grid-img" src={this.props.post.image}/></div></a>;
  }
});
