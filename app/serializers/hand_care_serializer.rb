class HandCareSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :quantity
end
