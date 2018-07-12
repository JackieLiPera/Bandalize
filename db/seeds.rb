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
artist3 = Artist.create!(name:"Kendrick Lamar", image_url:"xxxxx", on_tour: false, genre:"Hip Hop")
artist4 = Artist.create!(name:"Maroon 5", image_url:"xxxxx", on_tour: true, genre:"Pop")
artist5 = Artist.create!(name:"Taylor Swift", image_url:"xxxxx", on_tour: false, genre:"Pop")
artist6 = Artist.create!(name:"Glass Animals", image_url:"xxxxx", on_tour: true, genre:"Alternative")

Event.destroy_all

event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 29 14:33:20 EST 2018")), artist_id: artist2.id, venue_id: 1)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 30 15:34:20 EST 2018")), artist_id: artist4.id, venue_id: 2)
event3 = Event.create!(event_on: (DateTime.parse("Sat Jan 31 16:35:20 EST 2018")), artist_id: artist5.id, venue_id: 3)
event4 = Event.create!(event_on: (DateTime.parse("Sun Feb 01 17:36:20 EST 2018")), artist_id: artist6.id, venue_id: 4)
event5 = Event.create!(event_on: (DateTime.parse("Mon Mar 02 18:37:20 EST 2018")), artist_id: artist2.id, venue_id: 5)
event6 = Event.create!(event_on: (DateTime.parse("Tue Apr 03 19:38:20 EST 2018")), artist_id: artist3.id, venue_id: 6)
