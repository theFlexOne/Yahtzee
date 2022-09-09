class CreateDice < ActiveRecord::Migration[7.0]
  def change
    create_table :dice do |t|
      t.integer :position
      t.integer :value
      t.boolean :isFree

      t.timestamps
    end
  end
end
