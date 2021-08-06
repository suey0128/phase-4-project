class User < ApplicationRecord
    has_secure_password
    
    # has_one :shopping_cart 
    has_one :current_cart
    has_one :shopping_cart, through: :current_cart

    has_many :payments
    # has_many :shopping_carts, through: :payments
    has_many :purchases, through: :payments

    # Returns the hash digest of the given string.
    def self.digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                    BCrypt::Engine.cost
        BCrypt::Password.create(string, cost: cost)
    end

    def in_cart_item_instances
        self.shopping_cart.cart_items
    end

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, on: :create
    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true, length: { in: 2..20 }
    validates :last_name, presence: true, length: { in: 2..20 }
    validates :address, presence: true, length: { in: 2..100 }
    validates :city, presence: true, length: { in: 2..30 }
    validates :state, presence: true, length: { is: 2 }
    validates :zip, presence: true, length: { is: 5 }, numericality: { only_integer: true }
    validates :country, presence: true, length: { in: 2..20 } 
    
end
