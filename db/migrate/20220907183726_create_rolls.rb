class CreateRolls < ActiveRecord::Migration[7.0]
  def change
    create_table :rolls do |t|
      t.integer :turn_id

      t.timestamps
    end
  end
end
