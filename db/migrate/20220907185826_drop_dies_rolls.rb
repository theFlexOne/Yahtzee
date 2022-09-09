class DropDiesRolls < ActiveRecord::Migration[7.0]
  def change
    drop_table :dies_rolls
  end
end
