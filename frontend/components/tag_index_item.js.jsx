(function(root) {
  root.TagIndexItem = React.createClass({
    render: function() {
      return (
        <li>
          <a onClick={this.props.callback} href={ "#/tags/" + this.props.tag.tag.tag_name }>
            { this.props.tag.tag.tag_name }
          </a>
        </li>
      );
    }
  });
})(this);