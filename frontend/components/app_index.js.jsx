import React from 'react';
import Index from './Index.js';

var AppIndex = React.createClass ({

  render: function(){
    return <div>
            <div className="app-index">
              {this.props.children}
              <Index/>
            </div>
          </div>;
  }
});

export default AppIndex;
