class GameRecordsController < ApplicationController
  # ActionController::Parameters.action_on_unpermitted_parameters = :false

  skip_before_action :authorized

  def create
    byebug
    game_record = GameRecord.create game_record_params
    params[:turns].each do |t|
      turn = Turn.create game_record_id: game_record.id
      ScoringOption.create(option_id: t[:option][:id], value: t[:option][:value], turn_id: turn.id)
      t[:rolls].each do |r|
        roll = Roll.create turn_id: turn.id
        r.each do |d|
          Die.create roll_id: roll.id, value: d[:value], isFree: d[:isFree], position: d[:position]
        end
      end
    end
    # byebug
  end

  private

  def game_record_params
    { uuid: params[:uuid] }
  end
end
