class RemovePlayerIdColumnFromTurns < ActiveRecord::Migration[7.0]
  def change
    remove_column :turns, :player_id
  end
end
