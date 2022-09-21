# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_15_183437) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "name"
    t.string "subject"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dice", force: :cascade do |t|
    t.integer "position"
    t.integer "value"
    t.boolean "isFree"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "roll_id"
  end

  create_table "game_players", force: :cascade do |t|
    t.integer "player_id"
    t.integer "game_record_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "game_records", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "start_time"
    t.string "uuid"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roll_dice", force: :cascade do |t|
    t.integer "roll_id"
    t.integer "die_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rolls", force: :cascade do |t|
    t.integer "turn_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scoring_options", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "option_id"
    t.integer "value"
    t.integer "turn_id"
  end

  create_table "turns", force: :cascade do |t|
    t.integer "game_record_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "scoring_value"
    t.integer "turn_count"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
