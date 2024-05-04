json.review do 
    json.extract! @review, :id, :title, :owner, :rating, :body, :username, :user_id, :product_id
end