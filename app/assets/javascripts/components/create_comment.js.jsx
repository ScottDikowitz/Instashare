var CreateComment = React.createClass ({

  render: function(){
    return <div>
            <div className="create-comment">
              <form>
                <input type="text" placeholder="add comment..."/>
                <input type="submit" value="add"/>
              </form>
            </div>
          </div>;
  }
});
