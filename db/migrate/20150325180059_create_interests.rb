class CreateInterests < ActiveRecord::Migration
  def change
    create_table :interests do |t|
      t.boolean :sankey
      t.boolean :degree_mapping
      t.boolean :analytic_dashboards
      t.boolean :datamart
      t.boolean :custom_dashboards
      t.integer :user_id

      t.timestamps
    end
  end
end
