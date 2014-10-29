json.array!(@institutions) do |institution|
  json.extract! institution, :id, :name, :code, :street, :address, :city, :zip, :phone
  json.url institution_url(institution, format: :json)
end
