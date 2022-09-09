class AddRollIdToDice < ActiveRecord::Migration[7.0]
  def change
    add_column :dice, :roll_id, :integer
  end
end
