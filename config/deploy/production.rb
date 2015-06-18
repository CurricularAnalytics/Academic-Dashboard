# Define roles, user and IP address of deployment server
# role :name, %{[user]@[IP adde.]}
role :app, %w{ubuntu@academicdashboards.com}
role :web, %w{ubuntu@academicdashboards.com}
role :db,  %w{ubuntu@academicdashboards.com}

# Define server(s)
server 'academicdashboards.com', user: 'ubuntu', roles: %w{web}

# SSH Options
# See the example commented out section in the file
# for more options.

set :pty, true

set :use_sudo, false

set :ssh_options, {
	forward_agent: true,
	auth_methods: ["publickey"],
	keys: ["config/keys/academic-dashboards.pem"],
	user: "ubuntu"
}


#Dashboard!$123