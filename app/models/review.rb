# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  owner      :string           not null
#  rating     :integer          not null
#  body       :string           not null
#  username   :string           not null
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :owner, :rating, :body, :username, :user_id, :product_id, presence: true
    
    belongs_to :user
    belongs_to :product
end
