var Post = React.createClass ({

  componentDidMount: function(){


  },

  render: function(){
    return <div className="post">
                <section className="post-header"></section>
                <section className="post-image-container">{this.props.post.image}</section>
                <section className="comments">
                <span>{this.props.post.caption}</span>
                </section>
                <section><CreateComment/></section>
          </div>;
  }

});
