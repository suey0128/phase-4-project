class AddColumnTypeToHandCares < ActiveRecord::Migration[6.1]
  def change
    add_column :hand_cares, :item_type, :string
  end
end
