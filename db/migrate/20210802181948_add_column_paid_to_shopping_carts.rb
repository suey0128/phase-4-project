class AddColumnPaidToShoppingCarts < ActiveRecord::Migration[6.1]
  def change
    add_column :shopping_carts, :paid, :boolean
  end
end
