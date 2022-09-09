class User < ApplicationRecord
  has_many :messages
  has_secure_password

  validates :username, presence: true, uniqueness: true, length: { minimum: 5, maximum: 25 }
  validates :password, presence: true, length: { minimum: 4, maximum: 4 }
end
