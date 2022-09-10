class GameRecordsController < ApplicationController
  skip_before_action :authorized

  def create
    byebug
    gameRecord = GameRecord.create uuid: params[:uuid]
    params[:turns].each do |t|
      turn = gameRecord.turns.create count: t.count
      t.rolls.each do |r|
        roll = turn.rolls.create
        r.dice.each do |d|
          dice.create value: d.value, isFree: d.isFree, position: d.position
        end
      end
    end
  end

  private
end
