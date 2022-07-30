class CreateContentColumnForMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :content_column_for_messages do |t|
      add_column :messages, :content, :text
      t.timestamps
    end
  end
end
