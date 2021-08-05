class RemoveColumnFromShoppingCarts < ActiveRecord::Migration[6.1]
  def change
    remove_column :shopping_carts, :user_id
  end
end
