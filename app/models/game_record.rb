class GameRecord < ApplicationRecord
  has_many :turns
  has_many :players, through: :turns
  has_many :rolls, through: :turns
end
