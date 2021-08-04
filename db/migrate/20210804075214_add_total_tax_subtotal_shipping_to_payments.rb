class AddTotalTaxSubtotalShippingToPayments < ActiveRecord::Migration[6.1]
  def change
    add_column :payments, :total, :float 
    add_column :payments, :subtotal, :float 
    add_column :payments, :tax, :float 
    add_column :payments, :shipping, :float 
  end
end
