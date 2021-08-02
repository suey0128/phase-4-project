class GlueSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :strength, :description, :price, :quantity, :item_type
end
