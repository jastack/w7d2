class Todo < ActiveRecord::Base
  validates :boolean_field_name, inclusion: { in: [true, false] }
  validates :title, presence: true

  
end
