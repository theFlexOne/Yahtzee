class RemoveScoringOptionIdFromTurns < ActiveRecord::Migration[7.0]
  def change
    remove_column :turns, :scoring_option_id
  end
end
