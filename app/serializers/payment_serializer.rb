class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :shopping_cart_id, :user_id
end
