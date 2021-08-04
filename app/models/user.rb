class User < ApplicationRecord
    has_secure_password
    
    
    has_one :shopping_cart 

    has_many :payments
    has_many :shopping_carts, through: :payments

    # Returns the hash digest of the given string.
    def self.digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                    BCrypt::Engine.cost
        BCrypt::Password.create(string, cost: cost)
    end

    validates :first_name, presence: true, length: { in: 2..20 }
    validates :last_name, presence: true, length: { in: 2..20 }
    validates :shipping_address, presence: true, length: { in: 2..150 }
end
