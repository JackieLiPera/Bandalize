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
artist3 = Artist.create!(name:"Kendrick Lamar", image_url:"xxxxx", on_tour: false, genre:"R&B")
artist4 = Artist.create!(name:"Maroon 5", image_url:"xxxxx", on_tour: true, genre:"Pop")
artist5 = Artist.create!(name:"Taylor Swift", image_url:"xxxxx", on_tour: false, genre:"Pop")
artist6 = Artist.create!(name:"Glass Animals", image_url:"xxxxx", on_tour: true, genre:"Alternative")
artist7 = Artist.create!(name:"Shakira", image_url:"xxxxx", on_tour: true, genre:"Pop")
artist8 = Artist.create!(name:"The Weeknd", image_url:"xxxxx", on_tour: true, genre:"R&B")
artist9 = Artist.create!(name:"Drake", image_url:"xxxxx", on_tour: true, genre:"R&B")
artist10 = Artist.create!(name:"Kings of Leon", image_url:"xxxxx", on_tour: true, genre:"Rock")
artist11 = Artist.create!(name:"Ed Sheeran", image_url:"xxxxx", on_tour: true, genre:"Pop")
artist12 = Artist.create!(name:"Hozier", image_url:"xxxxx", on_tour: false, genre:"Alternative")
artist13 = Artist.create!(name:"Weezer", image_url:"xxxxx", on_tour: true, genre:"Rock")
artist14 = Artist.create!(name:"Alt-J", image_url:"xxxxx", on_tour: false, genre:"Alternative")
artist15 = Artist.create!(name:"The xx", image_url:"xxxxx", on_tour: true, genre:"Electronic")
artist16 = Artist.create!(name:"Shakey Graves", image_url:"xxxxx", on_tour: false, genre:"Folk")
artist17 = Artist.create!(name:"Childish Gambino", image_url:"xxxxx", on_tour: true, genre:"R&B")
artist18 = Artist.create!(name:"Artic Monkeys", image_url:"xxxxx", on_tour: true, genre:"Rock")
artist19 = Artist.create!(name:"Sublime", image_url:"xxxxx", on_tour: false, genre:"Rock")
artist20 = Artist.create!(name:"Odeza", image_url:"xxxxx", on_tour: true, genre:"Electronic")

Venue.destroy_all

venue1 = Venue.create!(name: 'Madison Square Garden', address: '4 Pennsylvania Plaza', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7505, longitude: 73.9934)
venue2 = Venue.create!(name: 'Forrest Hills Stadium' , address: '1 Tennis Pl', city: 'Forrest Hills', state: 'NY', country: 'United States', latitude: 40.7196, longitude: 73.8498 )
venue3 = Venue.create!(name: 'Bowery Ballroom', address: '6 Delancey St', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7204, longitude: 73.9934)
venue4 = Venue.create!(name: 'Barclays Center', address: '620 Atlantic Ave', city: 'Brooklyn', state: 'NY', country: 'United States', latitude: 40.6828, longitude: 73.9758)
venue5 = Venue.create!(name: 'Hammerstein Ballroom', address: '311 W 34th St', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7528, longitude: 73.9942)

Event.destroy_all

event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 29 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue1.id)
event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 29 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue2.id)
event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 29 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue3.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 30 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue1.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 30 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue2.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 30 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue3.id)
event3 = Event.create!(event_on: (DateTime.parse("Sat Jan 31 19:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue1.id)
event4 = Event.create!(event_on: (DateTime.parse("Sun Feb 01 20:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue2.id)
event4 = Event.create!(event_on: (DateTime.parse("Sun Feb 01 20:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue3.id)
event5 = Event.create!(event_on: (DateTime.parse("Thu Mar 02 18:00:00 EST 2018")), artist_id: artist7.id, venue_id: venue1.id)
event6 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 19:00:00 EST 2018")), artist_id: artist7.id, venue_id: venue2.id)
event7 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 20:00:00 EST 2018")), artist_id: artist8.id, venue_id: venue2.id)
event8 = Event.create!(event_on: (DateTime.parse("Thu Apr 03 18:00:00 EST 2018")), artist_id: artist8.id, venue_id: venue3.id)
event9 = Event.create!(event_on: (DateTime.parse("Sat Apr 03 19:00:00 EST 2018")), artist_id: artist9.id, venue_id: venue3.id)
event10 = Event.create!(event_on: (DateTime.parse("Wed Apr 03 20:00:00 EST 2018")), artist_id: artist9.id, venue_id: venue4.id)
event11 = Event.create!(event_on: (DateTime.parse("Thu Apr 03 19:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue5.id)
event12 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 18:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue1.id)
event13 = Event.create!(event_on: (DateTime.parse("Wed Apr 03 20:00:00 EST 2018")), artist_id: artist10.id, venue_id: venue2.id)
event14 = Event.create!(event_on: (DateTime.parse("Thu Apr 03 20:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue3.id)
event15 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 19:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue4.id)
event16 = Event.create!(event_on: (DateTime.parse("Sat Apr 03 20:45:00 EST 2018")), artist_id: artist11.id, venue_id: venue1.id)
event17 = Event.create!(event_on: (DateTime.parse("Sat Apr 03 19:45:00 EST 2018")), artist_id: artist11.id, venue_id: venue2.id)
event18 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 19:30:00 EST 2018")), artist_id: artist11.id, venue_id: venue4.id)
event19 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 19:45:00 EST 2018")), artist_id: artist13.id, venue_id: venue3.id)
event20 = Event.create!(event_on: (DateTime.parse("Sat Apr 03 20:30:00 EST 2018")), artist_id: artist13.id, venue_id: venue2.id)
event21 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 17:30:00 EST 2018")), artist_id: artist15.id, venue_id: venue4.id)
event22 = Event.create!(event_on: (DateTime.parse("Thu Apr 03 19:00:00 EST 2018")), artist_id: artist15.id, venue_id: venue5.id)
event23 = Event.create!(event_on: (DateTime.parse("Sat Apr 03 20:00:00 EST 2018")), artist_id: artist17.id, venue_id: venue1.id)
event24 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue3.id)
event25 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue5.id)
event26 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue4.id)
event27 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue2.id)
event28 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue3.id)
event29 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue1.id)
event30 = Event.create!(event_on: (DateTime.parse("Fri Apr 03 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue2.id)

Rsvp.destroy_all

rsvp1 = Rsvp.create!(user_id: currentUser.id, event_id: event1.id)
rsvp3 = Rsvp.create!(user_id: currentUser.id, event_id: event10.id)
rsvp4 = Rsvp.create!(user_id: currentUser.id, event_id: event15.id)
rsvp5 = Rsvp.create!(user_id: currentUser.id, event_id: event20.id)
rsvp6 = Rsvp.create!(user_id: currentUser.id, event_id: event25.id)

Tracking.destroy_all

tracking1 = Tracking.create!(user_id: currentUser.id , artist_id: artist1.id)
tracking2 = Tracking.create!(user_id: currentUser.id , artist_id: artist2.id)
tracking3 = Tracking.create!(user_id: currentUser.id , artist_id: artist13.id)
tracking4 = Tracking.create!(user_id: currentUser.id , artist_id: artist14.id)
tracking5 = Tracking.create!(user_id: currentUser.id , artist_id: artist20.id)
tracking6 = Tracking.create!(user_id: currentUser.id , artist_id: artist6.id)
