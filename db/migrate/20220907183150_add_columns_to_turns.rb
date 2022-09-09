class AddColumnsToTurns < ActiveRecord::Migration[7.0]
  def change
    change_table :turns do |t|
      t.integer :scoring_option_id
      t.integer :player_id
      t.integer :scoring_value
      t.integer :turn_count
    end
  end
end
