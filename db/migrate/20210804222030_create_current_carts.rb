class CreateCurrentCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :current_carts do |t|
      t.integer :user_id
      t.integer :shopping_cart_id

      t.timestamps
    end
  end
end
