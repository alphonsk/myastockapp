class Post < ApplicationRecord
    validates :post, presence: true, allow_blank: false
end
