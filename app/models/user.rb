class User < ApplicationRecord
    validates :session_token, :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

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
        password_item = BCrypt::Password.new(@password_digest)
        password_item.is_password?(password)
    end

    def reset_session_token!
        @session_token ||= SecureRandom::urlsafe_base64
        self.save!
        @session_token
    end

    private
    def ensure_session_token
        @session_token = SecureRandom::urlsafe_base64
    end
end
