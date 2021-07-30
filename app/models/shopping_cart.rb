class ShoppingCart < ApplicationRecord
    belongs_to :user

    has_many :payments
    has_many :items, through: :payments

    has_many :cart_items
    has_many :press_ons, through: :cart_items, source: :item, source_type: "PressOn"
    has_many :glues, through: :cart_items, source: :item, source_type: "Glue"
    has_many :hand_cares, through: :cart_items, source: :item, source_type: "HandCare"

    # has_many :items, :through => :cart_items, source_type: ?????
end
