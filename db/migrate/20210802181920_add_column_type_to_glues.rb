class AddColumnTypeToGlues < ActiveRecord::Migration[6.1]
  def change
    add_column :glues, :item_type, :string
  end
end
