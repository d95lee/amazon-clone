@reviews.each do |review|
    json.set! review.id do 
        json.extract! review,
        :id, :owner, :rating, :body, :username, :user_id, :product_id
    end
end