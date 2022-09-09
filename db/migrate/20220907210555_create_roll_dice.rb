class CreateRollDice < ActiveRecord::Migration[7.0]
  def change
    create_table :roll_dice do |t|
      t.integer :roll_id
      t.integer :die_id

      t.timestamps
    end
  end
end
