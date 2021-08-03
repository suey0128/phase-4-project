class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :password_digest, 
             :billing_address, :shipping_address, :email, :birthday, :in_cart_item_instances, :items
  
  has_one :shopping_cart
  has_many :shopping_carts, through: :payments

  def in_cart_item_instances
    self.object.shopping_cart.cart_items
  end

  def items
    items = []
    items << self.object.shopping_cart.press_ons
    items << self.object.shopping_cart.hand_cares
    items << self.object.shopping_cart.glues
    items.flatten
  end
end
