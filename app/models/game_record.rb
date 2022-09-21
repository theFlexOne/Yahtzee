class GameRecord < ApplicationRecord
  has_many :turns
  has_many :game_players
  has_many :players, through: :game_players
  has_many :rolls, through: :turns
end
