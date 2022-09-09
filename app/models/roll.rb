class Roll < ApplicationRecord
  belongs_to :turn
  has_many :dice
end
