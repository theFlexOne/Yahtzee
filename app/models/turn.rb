class Turn < ApplicationRecord
  has_one :player
  has_one :scoring_option
  has_many :rolls
  belongs_to :game_record
end
