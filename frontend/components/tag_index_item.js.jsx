import React from 'react';

var TagIndexItem = React.createClass({
    render: function() {

        // <a className='location-item'
        //     onClick={this.props.callback}
        //     href={ "#/location/" + this.props.location.location.id }>
        //    <span>{this.props.location.location.place}</span>
        // </a>
      return (
          <a className='location-item'
              onClick={this.props.callback}
              href={ "#/tags/" + this.props.tag.tag.tag_name }>
              <span style={{fontSize: '1.5em', color: '#999'}}>&nbsp;#&nbsp;&nbsp;</span>
            <span>{this.props.tag.tag.tag_name}</span>
          </a>
      );
    }
  });

export default TagIndexItem;
