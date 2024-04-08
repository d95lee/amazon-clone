class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.string :owner, null: false
      t.integer :rating, null: false
      t.string :body, null: false
      t.string :username, null: false
      t.references :user, null: false, foreign_key: true 
      t.references :product, null: false, foreign_key: true 
      t.timestamps
    end
  end
end
