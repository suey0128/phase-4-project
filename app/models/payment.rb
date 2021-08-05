class Payment < ApplicationRecord
    # belongs_to :user
    # belongs_to :shopping_cart
    belongs_to :customer, :class_name => "User", :foreign_key =>"user_id"
    belongs_to :purchase, :class_name => "ShoppingCart", :foreign_key =>"shopping_cart_id"
end
