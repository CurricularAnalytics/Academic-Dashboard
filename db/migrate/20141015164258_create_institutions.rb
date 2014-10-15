class CreateInstitutions < ActiveRecord::Migration
  def change
    create_table :institutions do |t|
      t.string :name
      t.string :address
      t.string :state
      t.string :cityzip
      t.string :phone

      t.timestamps
    end
  end
end
