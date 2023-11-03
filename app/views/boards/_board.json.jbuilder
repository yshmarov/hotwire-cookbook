json.extract! board, :id, :name, :last_name, :city, :color, :animal, :fruit, :employee_id, :created_at, :updated_at
json.url board_url(board, format: :json)
