import React from 'react';
import merge from 'lodash/merge';

var PostGridSquare = React.createClass ({
  render: function(){
    //   <div className="grid-img" style={{backgroundImage: `url(${this.props.post.image})`}}/>
    return <a href={"#/posts/" + this.props.post.id}
              className="post-grid-square"
              style={merge({},this.props.style)}>
              <span className="square-info">
                  {this.props.post.numLikes}❤  {this.props.post.numComments}✉
              </span>
              <div className="square-hover">
                  <img className="grid-img" src={this.props.post.image} style={{objectFit: 'cover'}}/>
              </div>
           </a>;
  }
});

export default PostGridSquare;
