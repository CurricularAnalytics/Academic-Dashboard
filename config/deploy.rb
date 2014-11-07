# Define the name of the application
set :application, 'AcademicDashboards'

# Define where can Capistrano access the source repository
# set :repo_url, 'https://github.com/[user name]/[application name].git'
set :scm, :git
set :repo_url, 'git@github.com:UNMInformatics/Academic-Dashboard.git'

# Define where to put your application code
set :deploy_to, "/home/ubuntu/apps"

set :rails_env, "production"

set :default_env, {
	#rvm_bin_path: '~/.rvm/bin',
	'rvm_bin_path' => '~/.rvm/bin',
	'PATH' => "/home/ubuntu/.rvm/gems/ruby-2.1.4/bin:/home/ubuntu/.rvm/gems/ruby-2.1.4@global/bin:/home/ubuntu/.rvm/rubies/ruby-2.1.4/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/home/ubuntu/.rvm/bin:/home/ubuntu/.rvm/bin",
	'GEM_PATH' => "/home/ubuntu/.rvm/gems/ruby-2.1.4:/home/ubuntu/.rvm/gems/ruby-2.1.4@global",
	'GEM_HOME' => "/home/ubuntu/.rvm/gems/ruby-2.1.4",
	'SECRET_KEY_BASE' => '35e5352b7431887d7707cbc912848abe4566c3ca124b8f654f30ccad999114dd022c6026d79479cfadc769b459ea285c96ddaeb314c9f863aa543c3a0d6d68ff'
}

set :pty, true

set :format, :pretty

set :rails_env, :production

set :default_shell, '/bin/bash'


task :restart do
	on roles(:app) do
		execute "kill -QUIT `cat /home/ubuntu/unicorn/unicorn.pid`"
		within "/home/ubuntu/apps/current" do
			with rails_env: fetch(:rails_env) do
				execute :bundle, "exec unicorn_rails", "-c", "config/unicorn.rb", "-E", "production", "-D"
			end
		end
	end
end