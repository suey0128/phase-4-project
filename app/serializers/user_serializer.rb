class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :password_digest, :billing_address, :shipping_address, :email, :birthday
end
