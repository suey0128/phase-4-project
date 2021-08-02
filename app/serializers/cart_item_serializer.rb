class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :shopping_cart_id, :in_cart_quantity
end
