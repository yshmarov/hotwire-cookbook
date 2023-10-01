class Employee < ApplicationRecord
  INLINE_EDITABLE_ATTRS = [:first_name, :last_name, :dob, :country, :phone, :email]

  validates :first_name, :last_name, :email, presence: true
end
