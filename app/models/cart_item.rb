class CartItem < ApplicationRecord
    belongs_to :shopping_cart
    belongs_to :item, polymorphic: true

    def item_total
        self.item.price*self.in_cart_quantity
    end
end
