# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token

    validates :email, :session_token, presence: true
    validates :email, :session_token, uniqueness: true 
    validates :email, length: { in: 3..100 }, allow_nil: true
    validates :password, length: { in: 6..40 }, allow_nil: true

    has_many :cart_items
    has_many :cart_products,
        through: :cart_items,
        source: :product
    has_many :reviews

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user&.authenticate(password)
            user 
        else
            nil
        end
    end
    
    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
      end
    
    private
    def generate_unique_session_token
        loop do
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
