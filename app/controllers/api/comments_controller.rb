class Api::CommentsController < ApplicationController

  def index

  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @post_id = params[:comment][:post_id]
    if @comment.save

      @comments = Post.find(params[:comment][:post_id]).comments.includes(:user).last(25)
      # render json: Post.cutComment(@comment)
      render :show
    else
      render json: {}
    end

  end

  def destroy
    @comment = Comment.find(params[:id])
    @post_id = @comment.post_id
    if current_user.id == @comment.user_id
      @comment.destroy
      @comments = Post.find(@post_id).comments.includes(:user).last(25)
      # render json: Post.cutComment(@comment)
      render :show
    else
      render json: {}
    end
  end

  private
  def comment_params
    self.params.require(:comment).permit(:content, :user_id, :post_id)
  end

end
