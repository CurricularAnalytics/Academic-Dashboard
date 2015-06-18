# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

requests = InfoRequest.all

requests.each do |req|

description = ""

		json = JSON.parse req.to_json
		json.delete "id"
		json.delete "updated_at"
		a = json.to_a
		a.each do |x|
			description += "#{x[0]}: #{x[1]}\n"
		end

		body = {
			"key" => "dd3759f01960017f7897f1abf800eb273a2b2e52",
			"issue" => {
				"project_id" => 1,
				"tracker_id" => 3,
				"status_id" => 1,
				"priority_id" => 2,
				"subject" => "Request from #{req.institution}",
				"description" => description
			}
		}

		HTTParty.post("http://52.26.168.38/issues.json", body: body)

end