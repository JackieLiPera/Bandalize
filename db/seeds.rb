# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

currentUser = User.create!(email: 'jac.lipera@gmail.com', password: 'jackie')

Artist.destroy_all

artist1 = Artist.create!(name:"Red Hot Chili Peppers", image_url:"xxxxx", on_tour: false, genre:"Rock")
artist2 = Artist.create!(name:"Rainbow Kitten Surprise", image_url:"xxxxx", on_tour: true, genre:"Alternative")
artist3 = Artist.create!(name:"Kendrick Lamar", image_url:"xxxxx", on_tour: false, genre:"Rap")
artist4 = Artist.create!(name:"Maroon 5", image_url:"xxxxx", on_tour: true, genre:"Pop")
artist5 = Artist.create!(name:"Taylor Swift", image_url:"xxxxx", on_tour: false, genre:"Pop")
artist6 = Artist.create!(name:"Glass Animals", image_url:"xxxxx", on_tour: true, genre:"Alternative")
