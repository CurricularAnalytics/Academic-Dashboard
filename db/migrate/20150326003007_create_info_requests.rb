class CreateInfoRequests < ActiveRecord::Migration
  def change
    create_table :info_requests do |t|
      t.string :name
      t.string :email
      t.string :institution
      t.string :title
      t.string :phone
      t.text :comments
      t.boolean :sankey
      t.boolean :degree_mapping
      t.boolean :analytic_dashboards
      t.boolean :datamart
      t.boolean :custom_dashboards

      t.timestamps
    end
  end
end
