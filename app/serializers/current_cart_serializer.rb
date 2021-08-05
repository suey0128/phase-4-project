class CurrentCartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :shopping_cart_id
end
