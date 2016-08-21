class Api::NotificationsController < ApplicationController

  def index
    comments = current_user.user_comments
    .order(created_at: :desc)
    .limit(2)

    likes = current_user.foreign_likes.where(["likes.user_id != ?", current_user.id ])

    newFollowers = Follow.joins("INNER JOIN users ON users.id = follows.follower_id")
    .where(["user_id = ?", current_user.id ])
    .select('users.username, follows.created_at')
    .order(created_at: :desc)

    render json: {comments: comments, likes: likes, newFollowers: newFollowers}

  end


end
