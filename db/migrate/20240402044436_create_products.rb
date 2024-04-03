class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name, null: false, index: { unique: true }
      t.bigint :price, null: false, index: { unique: true } #take away unique, bigint to float
      t.string :description
      t.timestamps
    end
  end
end
