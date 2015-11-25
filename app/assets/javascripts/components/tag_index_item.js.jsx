(function(root) {
  root.TagIndexItem = React.createClass({
    render: function() {
      return (
        <li>
          <a href={ "#/tags/" + this.props.tag.tag.tag_name }>
            { this.props.tag.tag.tag_name }
          </a>
        </li>
      );
    }
  });
})(this);
