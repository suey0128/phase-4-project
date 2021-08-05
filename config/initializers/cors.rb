# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors



Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:4000'

    resource '*',
      headers: :any,
      :credentials => true,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

#ABOVE is the default in the file, and I changed it's origins from "*" to "localhost:4000", and added credentials
#BELOW is from the rails github repo that the code for rails6, which I have. 
# I changed it's origins from "*" to "localhost:4000", and added credentials

# Rails.application.config.middleware.insert_before 0, Rack::Cors, debug: true, logger: (-> { Rails.logger }) do
#   allow do
#     # origins '*'
#     origins 'localhost:4000'

#     resource '/cors',
#       :headers => :any,
#       :methods => [:post],
#       :max_age => 0

#     resource '*',
#       :headers => :any,
#       :credentials => true,
#       :methods => [:get, :post, :delete, :put, :patch, :options, :head],
#       :max_age => 0
#   end
# end

