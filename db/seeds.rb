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

Venue.destroy_all

venue1 = Venue.create!(name: 'Madison Square Garden', address: '4 Pennsylvania Plaza', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7505, longitude: 73.9934)
venue2 = Venue.create!(name: 'Forrest Hills Stadium' , address: '1 Tennis Pl', city: 'Forrest Hills', state: 'NY', country: 'United States', latitude: 40.7196, longitude: 73.8498 )
venue3 = Venue.create!(name: 'Bowery Ballroom', address: '6 Delancey St', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7204, longitude: 73.9934)

Event.destroy_all

event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 29 14:33:20 EST 2018")), artist_id: artist2.id, venue_id: venue1.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 30 15:34:20 EST 2018")), artist_id: artist4.id, venue_id: venue1.id)
event3 = Event.create!(event_on: (DateTime.parse("Sat Jan 31 16:35:20 EST 2018")), artist_id: artist5.id, venue_id: venue2.id)
event4 = Event.create!(event_on: (DateTime.parse("Sun Feb 01 17:36:20 EST 2018")), artist_id: artist6.id, venue_id: venue2.id)
event5 = Event.create!(event_on: (DateTime.parse("Mon Mar 02 18:37:20 EST 2018")), artist_id: artist2.id, venue_id: venue3.id)
event6 = Event.create!(event_on: (DateTime.parse("Tue Apr 03 19:38:20 EST 2018")), artist_id: artist3.id, venue_id: venue3.id)

Rsvp.destroy_all

rsvp1 = Rsvp.create!(user_id: currentUser.id, event_id: event1.id)
rsvp3 = Rsvp.create!(user_id: currentUser.id, event_id: event3.id)
rsvp4 = Rsvp.create!(user_id: currentUser.id, event_id: event4.id)
rsvp5 = Rsvp.create!(user_id: currentUser.id, event_id: event5.id)
rsvp6 = Rsvp.create!(user_id: currentUser.id, event_id: event6.id)

Tracking.destroy_all

tracking1 = Tracking.create!(user_id: currentUser.id , artist_id: artist1.id)
tracking2 = Tracking.create!(user_id: currentUser.id , artist_id: artist2.id)
tracking3 = Tracking.create!(user_id: currentUser.id , artist_id: artist3.id)
tracking4 = Tracking.create!(user_id: currentUser.id , artist_id: artist4.id)
