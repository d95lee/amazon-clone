json.review do 
    json.extract! @review, :id, :owner, :rating, :body, :username, :user_id, :product_id
end