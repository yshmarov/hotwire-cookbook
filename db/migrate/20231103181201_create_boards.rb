class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.string :name
      t.string :last_name
      t.string :city
      t.string :color
      t.string :animal
      t.string :fruit
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
