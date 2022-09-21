class RemoveNameAndAddTurnIdToScoringOptions < ActiveRecord::Migration[7.0]
  def change
    remove_column :scoring_options, :name
    add_column :scoring_options, :turn_id, :integer
  end
end
