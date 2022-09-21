class Player < ApplicationRecord
  has_many :game_players
  has_many :game_records, through: :game_players
end
