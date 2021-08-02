class AddColumnInCartQuantityToCartItems < ActiveRecord::Migration[6.1]
  def change
    add_column :cart_items, :in_cart_quantity, :integer
  end
end
