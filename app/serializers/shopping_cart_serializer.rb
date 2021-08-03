class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :paid, :all_items_in_cart, :total_amount
end
