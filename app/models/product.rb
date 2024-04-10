# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :float            not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :price, presence: true
    validates :name, length: { in: 1..200 }, allow_nil: true
    validates :price, length: { in: 1..8 }, allow_nil: true

    has_one_attached :photo
    has_many :cart_items
    has_many :reviews
end
