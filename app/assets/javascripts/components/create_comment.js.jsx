var CreateComment = React.createClass ({

  handleSubmit: function(e){
    e.preventDefault();
    // debugger;
    var comment = {content: e.currentTarget[0].value, user_id: 2, post_id: this.props.post_id };
    ApiUtil.createComment(comment);


  },

  render: function(){
    return <div>
            <div className="create-comment">
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="content" placeholder="add comment..."/>
                <input type="submit" value="add"/>
              </form>
            </div>
          </div>;
  }
});
