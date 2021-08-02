class AddColumnTypeToPressOns < ActiveRecord::Migration[6.1]
  def change
    add_column :press_ons, :item_type, :string
  end
end
