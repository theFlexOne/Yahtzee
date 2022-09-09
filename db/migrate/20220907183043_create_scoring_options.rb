class CreateScoringOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :scoring_options do |t|
      t.string :name

      t.timestamps
    end
  end
end
