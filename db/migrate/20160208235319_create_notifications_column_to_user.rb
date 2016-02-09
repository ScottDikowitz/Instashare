class CreateNotificationsColumnToUser < ActiveRecord::Migration
  def change
    add_column :users, :notify_last, :timestamp
  end
end
