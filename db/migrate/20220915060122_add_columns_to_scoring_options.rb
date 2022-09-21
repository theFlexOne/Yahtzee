class AddColumnsToScoringOptions < ActiveRecord::Migration[7.0]
  def change
    add_column :scoring_options, :option_id, :integer
    add_column :scoring_options, :value, :integer
  end
end
