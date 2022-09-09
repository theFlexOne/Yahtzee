class RemoveGameRecordIdFromPlayers < ActiveRecord::Migration[7.0]
  def change
    remove_column :players, :game_record_id
  end
end
