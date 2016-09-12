import React from 'react';

var PostGridSquare = React.createClass ({
  render: function(){
    return <a href={"#/posts/" + this.props.post.id} className="post-grid-square"><span className="square-info">{this.props.post.numLikes}❤  {this.props.post.numComments}✉</span><div className="square-hover"><img className="grid-img" src={this.props.post.image}/></div></a>;
  }
});

export default PostGridSquare;
