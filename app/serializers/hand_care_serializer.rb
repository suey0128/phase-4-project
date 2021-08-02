class HandCareSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :quantity, :item_type
end
