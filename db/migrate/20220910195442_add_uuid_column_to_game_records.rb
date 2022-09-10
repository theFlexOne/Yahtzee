class AddUuidColumnToGameRecords < ActiveRecord::Migration[7.0]
  def change
    add_column :game_records, :uuid, :string
  end
end
