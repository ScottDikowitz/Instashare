import React from 'react';

import PostGridSquare from './post_grid_square.js';

class PostGrid extends React.Component {
  constructor (props) {
    super(props);

    this._constructGrid = this._constructGrid.bind(this);
  }

  render () {
      const collection = this._constructGrid();
      return <div className="post-grid">
                {collection}
              </div>;
  }

  _constructGrid () {
      var collection = [];
      const {length} = this.props.posts;
      for (var i = 0; i < length; i+= 3){
          let row = [];
          let post1 = this.props.posts[i];
          row.push(<PostGridSquare key={`post-${post1.id}`} post={post1} style={{marginLeft: 10}}/>);
          if (i + 1 < length) {
              let post2 = this.props.posts[i + 1];
              row.push(<PostGridSquare key={`post-${post2.id}`} post={post2} style={{margin: '0 10px 0 10px'}}/>);
          } else { row.push(<div key={'spacer-1'} style={{display: 'flex', flex: 1, margin: '0 10px 0 10px'}}></div>)}
          if (i + 2 < length) {
              let post3 = this.props.posts[i + 2];
              row.push(<PostGridSquare key={`post-${post3.id}`} post={post3} style={{marginRight: 10}}/>);
          } else { row.push(<div key={'spacer-2'} style={{display: 'flex', flex: 1, marginRight: 10}}></div>)}
          collection.push(<div style={{display: 'flex', flex: 1, marginBottom: 10}} key={`grid-row-${i}`}>{row}</div>);
      }
      return collection;
  }
};

export default PostGrid;
