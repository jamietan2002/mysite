class CreateFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :friends do |t|
      t.string :username
      t.string :email
      t.string :bio

      t.timestamps
    end
  end
end
