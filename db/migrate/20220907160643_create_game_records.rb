class CreateGameRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :game_records do |t|
      t.time :start_time

      t.timestamps
    end
  end
end
