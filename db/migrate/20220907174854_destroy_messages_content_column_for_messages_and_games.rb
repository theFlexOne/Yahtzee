class DestroyMessagesContentColumnForMessagesAndGames < ActiveRecord::Migration[7.0]
  def change
    drop_table :messages
    drop_table :content_column_for_messages
    drop_table :games
  end
end
