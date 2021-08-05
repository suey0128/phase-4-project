class AddFiveAddressRelatedColumnToShoppingCart < ActiveRecord::Migration[6.1]
  def change
    add_column :shopping_carts, :address, :string 
    add_column :shopping_carts, :city, :string 
    add_column :shopping_carts, :state, :string 
    add_column :shopping_carts, :zip, :string 
    add_column :shopping_carts, :country, :string 
  end
end
