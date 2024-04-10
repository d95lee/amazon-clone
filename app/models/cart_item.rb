# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :bigint           not null
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :quantity, :user, :product, presence: true
    validates :quantity, numericality: { greater_than_or_equal_to: 0 }

    belongs_to :user
    belongs_to :product 
end
