class CreateGamePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :game_players do |t|
      t.integer :player_id
      t.integer :game_record_id

      t.timestamps
    end
  end
end
