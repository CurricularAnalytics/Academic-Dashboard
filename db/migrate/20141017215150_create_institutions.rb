class CreateInstitutions < ActiveRecord::Migration
  def change
    create_table :institutions do |t|
      t.string :name
      t.string :code
      t.string :street
      t.string :address
      t.string :city
      t.string :zip
      t.string :phone

      t.timestamps
    end
  end
end