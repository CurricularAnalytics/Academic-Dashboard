# Define roles, user and IP address of deployment server
# role :name, %{[user]@[IP adde.]}
role :app, %w{ubuntu@54.84.232.218}
role :web, %w{ubuntu@54.84.232.218}
role :db,  %w{ubuntu@54.84.232.218}

# Define server(s)
server '54.84.232.218', user: 'ubuntu', roles: %w{web}

# SSH Options
# See the example commented out section in the file
# for more options.

set :pty, true

set :use_sudo, false

set :ssh_options, {
	forward_agent: true,
	auth_methods: ["publickey"],
	keys: ["config/keys/academicdashboards.pem"],
	user: "ubuntu"
}