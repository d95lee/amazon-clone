class ChangeProductColumn < ActiveRecord::Migration[7.1]
  def change
    remove_index :products, :name
    add_index :products, :name, unique: false
    remove_index :products, :price
    add_index :products, :price, unique: false
  end
end

