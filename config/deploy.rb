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
	'GEM_HOME' => "/home/ubuntu/.rvm/gems/ruby-2.1.4"
}

set :pty, true

set :format, :pretty

set :rails_env, :production

#set :default_run_options, {'shell' => 'bash'}
#set default_run_options[:shell] = '/bin/bash'
set :default_shell, '/bin/bash'


task :restart do
	on roles(:app) do
		#execute "source /home/ubuntu/.bashrc"
		#execute "kill -QUIT `cat /home/ubuntu/unicorn/unicorn.pid`"
		#execute "source /home/ubuntu/.bashrc; cd /home/ubuntu/apps/current; bundle exec unicorn_rails -c config/unicorn.rb -E production -D"
		#execute "cd /home/ubuntu/apps/current; bundle exec unicorn_rails -c config/unicorn.rb -E production -D"
		#execute "cd /home/ubuntu/apps/current; /home/ubuntu/.rvm/rubies/ruby-2.1.4/bin/ruby test.rb"
		#execute "printenv"
		invoke 'unicorn:restart'
	end
end