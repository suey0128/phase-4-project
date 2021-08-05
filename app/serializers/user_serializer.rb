class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :password_digest, 
             :billing_address, :shipping_address, :email, :birthday, :in_cart_item_instances, :items, :current_cart,
             :address, :city, :state, :zip, :country
  
  has_one :shopping_cart, through: :current_cart
  has_many :payments
  has_many :purchases, through: :payments



  def items
    items = []
    items << self.object.shopping_cart.press_ons
    items << self.object.shopping_cart.hand_cares
    items << self.object.shopping_cart.glues
    items.flatten
  end
end
