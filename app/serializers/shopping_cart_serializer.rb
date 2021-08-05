class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id, :paid, :all_items_in_cart, :total_amount, :first_name, :last_name, :shipping_address, 
              :address, :city, :state, :zip, :country, :updated_at 

  has_one :payment
end
