class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :paid
end
