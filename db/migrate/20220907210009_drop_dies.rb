class DropDies < ActiveRecord::Migration[7.0]
  def change
    drop_table :dies
  end
end
