# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  last_name       :string           not null
#
class User < ApplicationRecord
    validates :session_token, :email, presence: true, uniqueness: true
    validates :password_digest, :first_name, :last_name, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates_format_of :email, :with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password);
    end

    def is_password?(password)
        password_item = BCrypt::Password.new(self.password_digest)
        password_item.is_password?(password)
    end

    def reset_session_token!
        @session_token = SecureRandom::urlsafe_base64
        self.save!
        @session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    has_many :posts,
        foreign_key: :author_id,
        primary_key: :id,
        class_name: :Post

    has_many :friend_requests,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :Friend
    
    has_many :received_requests,
        foreign_key: :friend_id,
        primary_key: :id,
        class_name: :Friend

    has_one_attached :profile_picture

    has_many :comments,
        foreign_key: :author_id,
        primary_key: :id,
        class_name: :Comment

    has_many :messages,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Message
end
