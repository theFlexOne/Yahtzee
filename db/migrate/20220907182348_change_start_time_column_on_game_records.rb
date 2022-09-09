class ChangeStartTimeColumnOnGameRecords < ActiveRecord::Migration[7.0]
  def change
    remove_column :game_records, :start_time
    add_column :game_records, :start_time, :datetime
  end
end
