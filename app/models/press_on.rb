class PressOn < ApplicationRecord
    has_many :cart_items, as: :item
    has_many :shopping_carts, through: :cart_items , as: :item

    def self.best_selling
        #sort the order by best_selling
        
    end
end
