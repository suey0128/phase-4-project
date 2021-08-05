class ShoppingCart < ApplicationRecord
    # belongs_to :user
    has_one :current_cart
    has_one :user, through: :current_cart

    has_one :payment
    # has_many :users, through: :payments
    has_one :customer, through: :payment

    has_many :cart_items
    has_many :press_ons, through: :cart_items, source: :item, source_type: "PressOn"
    has_many :glues, through: :cart_items, source: :item, source_type: "Glue"
    has_many :hand_cares, through: :cart_items, source: :item, source_type: "HandCare"

    def all_items_in_cart
        self.cart_items.map{|i| {quantity: i.in_cart_quantity, item: i.item, cart_item_id: i.id, item_total: i.item_total}}
    end

    def total_amount
        self.cart_items.map{|i| i.in_cart_quantity * i.item.price}.sum
    end

    validates :first_name, presence: true, length: { in: 2..15 }
    validates :last_name, presence: true, length: { in: 2..15 }
    validates :address, presence: true, length: { in: 2..100 }
    validates :city, presence: true, length: { in: 2..30 }
    validates :state, presence: true, length: { is: 2 }
    validates :zip, presence: true, length: { is: 5 }, numericality: { only_integer: true }
    validates :country, presence: true, length: { in: 2..20 } 
end
