class AddRollIdToDies < ActiveRecord::Migration[7.0]
  def change
    add_column :dies, :roll_id, :integer
  end
end
