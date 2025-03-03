# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150326003007) do

  create_table "info_requests", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "institution"
    t.string   "title"
    t.string   "phone"
    t.text     "comments"
    t.boolean  "sankey"
    t.boolean  "degree_mapping"
    t.boolean  "analytic_dashboards"
    t.boolean  "datamart"
    t.boolean  "custom_dashboards"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "institutions", force: true do |t|
    t.string   "name"
    t.string   "code"
    t.string   "street"
    t.string   "address"
    t.string   "city"
    t.string   "zip"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "interests", force: true do |t|
    t.boolean  "sankey"
    t.boolean  "degree_mapping"
    t.boolean  "analytic_dashboards"
    t.boolean  "datamart"
    t.boolean  "custom_dashboards"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "name"
    t.integer  "institution_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "phone"
    t.string   "title"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
