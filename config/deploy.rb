# Define the name of the application
set :application, 'AcademicDashboards'

# Define where can Capistrano access the source repository
# set :repo_url, 'https://github.com/[user name]/[application name].git'
set :scm, :git
set :repo_url, 'git@github.com:UNMInformatics/Academic-Dashboard.git'

# Define where to put your application code
set :deploy_to, "/home/ubuntu/apps"

set :rails_env, "production"

set :default_env, {rvm_bin_path: '~/.rvm/bin'}

set :pty, true

set :format, :pretty

set :rails_env, :production





task :restart do
	on roles(:app) do
		#execute "kill -QUIT `cat /home/ubuntu/unicorn/unicorn.pid`"
		#execute "cd /home/ubuntu/apps/current"
		#execute "unicorn_rails -c config/unicorn.rb -E production -D"
		execute "cd /home/ubuntu/apps/current; /home/ubuntu/.rvm/rubies/ruby-2.1.4/bin/ruby test.rb"
	end
end