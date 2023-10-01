class Employee < ApplicationRecord
  validates :first_name, :last_name, :email, presence: true
end
