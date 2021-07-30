class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :billing_address, :shipping_address, :email, :birthday
end
