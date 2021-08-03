class PressOnSerializer < ActiveModel::Serializer
  attributes :id, :name, :shape, :color, :add_on, :description, :price, :quantity, :image, :item_type
end