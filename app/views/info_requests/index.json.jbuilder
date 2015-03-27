json.array!(@info_requests) do |info_request|
  json.extract! info_request, :id, :name, :email, :institution, :title, :phone, :comments, :sankey, :degree_mapping, :analytic_dashboards, :datamart, :custom_dashboards
  json.url info_request_url(info_request, format: :json)
end
