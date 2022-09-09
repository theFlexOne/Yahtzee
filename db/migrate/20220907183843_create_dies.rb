class CreateDies < ActiveRecord::Migration[7.0]
  def change
    create_table :dies do |t|
      t.integer :position
      t.integer :value
      t.boolean :is_free

      t.timestamps
    end
  end
end
