import React from 'react';

var LocationIndexItem = React.createClass({
    render: function() {
      return (
          <a className='location-item'
              onClick={this.props.callback}
              href={ "#/location/" + this.props.location.location.id }>
              <span style={{fontSize: '1.5em', color: '#999'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
             <span>{this.props.location.location.place}</span>
          </a>
      );
    }
  });

export default LocationIndexItem;
