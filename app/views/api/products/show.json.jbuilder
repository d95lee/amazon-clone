json.product do
  json.extract! @product, :id, :name, :price, :description
  if @product.photo.attached?
    json.photoUrl url_for(@product.photo)
  end
end