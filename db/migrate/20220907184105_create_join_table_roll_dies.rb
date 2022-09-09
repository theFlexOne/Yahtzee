class CreateJoinTableRollDies < ActiveRecord::Migration[7.0]
  def change
    create_join_table :rolls, :dies do |t|
      # t.index [:roll_id, :die_id]
      # t.index [:die_id, :roll_id]
    end
  end
end
