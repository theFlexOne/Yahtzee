class User < ApplicationRecord
  has_many :messages
  has_secure_password

  validates :username, presence: true, uniqueness: true, length: { minimum: 6, maximum: 25 }
  validates :password, presence: true, length: { minimum: 6, maximum: 25 }
end
