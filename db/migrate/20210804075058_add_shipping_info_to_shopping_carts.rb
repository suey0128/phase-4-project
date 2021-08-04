class AddShippingInfoToShoppingCarts < ActiveRecord::Migration[6.1]
  def change
    add_column :shopping_carts, :first_name, :string 
    add_column :shopping_carts, :last_name, :string 
    add_column :shopping_carts, :shipping_address, :string 
  end
end
