class Player < ApplicationRecord
  belongs_to :game_record
  belongs_to :turn
end
