var PostGridSquare = React.createClass ({
  mixins: [ReactRouter.History],

  handleClick: function(e){
    this.history.pushState(null, '/posts/' + this.props.post.id);
  },


  render: function(){
    return <div onClick={this.handleClick} className="post-grid-square"><img src={this.props.post.image}/></div>;
  }
});
