class CreateTurns < ActiveRecord::Migration[7.0]
  def change
    create_table :turns do |t|
      t.integer :game_record_id

      t.timestamps
    end
  end
end
