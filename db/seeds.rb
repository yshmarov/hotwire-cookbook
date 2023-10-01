20.times do
  Employee.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    dob: Faker::Date.birthday(min_age: 18, max_age: 65),
    country: Faker::Address.country,
    phone: Faker::PhoneNumber.cell_phone,
    email: Faker::Internet.email
  )
end
