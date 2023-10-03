class Employee < ApplicationRecord
  validates :first_name, :last_name, :email, presence: true

  def self.ransackable_attributes(auth_object = nil)
    ["country", "created_at", "dob", "email", "first_name", "id", "last_name", "phone", "updated_at"]
  end

  def self.ransackable_associations(auth_object = nil)
    []
  end
end
