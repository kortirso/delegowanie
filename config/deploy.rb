# config valid only for current version of Capistrano
lock '3.9.1'

set :application, 'delegowanie'
set :repo_url, 'git@github.com:kortirso/delegowanie.git'

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/var/www/html/delegowanie'
set :deploy_user, 'kortirso'

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('config/application.yml')

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

namespace :deploy do
    desc 'Restart application'
    task :restart do
        on roles(:app), in: :sequence, wait: 5 do
            execute :touch, release_path.join('tmp/restart.txt')
        end
    end

    after :publishing, :restart
end
