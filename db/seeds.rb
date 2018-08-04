# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

currentUser = User.create!(email: 'jac.lipera@gmail.com', password: 'jackie', firstname: 'Jackie', lastname: 'LiPera')

Artist.destroy_all

artist1 = Artist.create!(name:"Red Hot Chili Peppers", on_tour: false, genre:"Rock")
artist2 = Artist.create!(name:"Rainbow Kitten Surprise", on_tour: true, genre:"Alternative")
artist3 = Artist.create!(name:"Kendrick Lamar", on_tour: false, genre:"R&B")
artist4 = Artist.create!(name:"Maroon 5", on_tour: true, genre:"Pop")
artist5 = Artist.create!(name:"Taylor Swift", on_tour: false, genre:"Pop")
artist6 = Artist.create!(name:"Glass Animals", on_tour: true, genre:"Alternative")
artist7 = Artist.create!(name:"Shakira", on_tour: true, genre:"Pop")
artist8 = Artist.create!(name:"The Weeknd", on_tour: true, genre:"R&B")
artist9 = Artist.create!(name:"Drake", on_tour: true, genre:"R&B")
artist10 = Artist.create!(name:"Kings of Leon", on_tour: true, genre:"Rock")
artist11 = Artist.create!(name:"Ed Sheeran", on_tour: true, genre:"Pop")
artist12 = Artist.create!(name:"Milky Chance", on_tour: false, genre:"Alternative")
artist13 = Artist.create!(name:"Weezer", on_tour: true, genre:"Rock")
artist14 = Artist.create!(name:"Alt-J", on_tour: false, genre:"Alternative")
artist15 = Artist.create!(name:"The xx", on_tour: true, genre:"Electronic")
artist16 = Artist.create!(name:"Shakey Graves", on_tour: false, genre:"Folk")
artist17 = Artist.create!(name:"Childish Gambino", on_tour: true, genre:"R&B")
artist18 = Artist.create!(name:"Arctic Monkeys", on_tour: true, genre:"Rock")
artist19 = Artist.create!(name:"Sublime", on_tour: false, genre:"Rock")
artist20 = Artist.create!(name:"Odesza", on_tour: true, genre:"Electronic")

artist1.photo.attach(io: File.open('./app/assets/images/artist_photos/rhcp.jpg'), filename: 'rhcp.jpg')
artist2.photo.attach(io: File.open('./app/assets/images/artist_photos/rks.jpg'), filename: 'rks.jpg')
artist3.photo.attach(io: File.open('./app/assets/images/artist_photos/kendrick.jpg'), filename: 'kendrick.jpg')
artist4.photo.attach(io: File.open('./app/assets/images/artist_photos/maroon.jpg'), filename: 'maroon.jpg')
artist5.photo.attach(io: File.open('./app/assets/images/artist_photos/swift.jpg'), filename: 'swift.jpg')
artist6.photo.attach(io: File.open('./app/assets/images/artist_photos/glassanimals.jpg'), filename: 'glassanimals.jpg')
artist7.photo.attach(io: File.open('./app/assets/images/artist_photos/shakira.jpg'), filename: 'shakira.jpg')
artist8.photo.attach(io: File.open('./app/assets/images/artist_photos/weeknd.png'), filename: 'weeknd.png')
artist9.photo.attach(io: File.open('./app/assets/images/artist_photos/drake.png'), filename: 'drake.png')
artist10.photo.attach(io: File.open('./app/assets/images/artist_photos/kings.png'), filename: 'kings.png')
artist11.photo.attach(io: File.open('./app/assets/images/artist_photos/ed.jpg'), filename: 'ed.jpg')
artist12.photo.attach(io: File.open('./app/assets/images/artist_photos/milky.jpg'), filename: 'milky.jpg')
artist13.photo.attach(io: File.open('./app/assets/images/artist_photos/weezer.jpg'), filename: 'weezer.jpg')
artist14.photo.attach(io: File.open('./app/assets/images/artist_photos/alt.jpg'), filename: 'alt.jpg')
artist15.photo.attach(io: File.open('./app/assets/images/artist_photos/xx.jpg'), filename: 'xx.jpg')
artist16.photo.attach(io: File.open('./app/assets/images/artist_photos/shakey.png'), filename: 'shakey.png')
artist17.photo.attach(io: File.open('./app/assets/images/artist_photos/childish.jpg'), filename: 'childish.jpg')
artist18.photo.attach(io: File.open('./app/assets/images/artist_photos/arctic.jpg'), filename: 'arctic.jpg')
artist19.photo.attach(io: File.open('./app/assets/images/artist_photos/sublime.jpg'), filename: 'sublime.jpg')
artist20.photo.attach(io: File.open('./app/assets/images/artist_photos/odeza.jpg'), filename: 'odeza.jpg')

Venue.destroy_all

venue1 = Venue.create!(name: 'Madison Square Garden', address: '4 Pennsylvania Plaza', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7505, longitude: -73.9934)
venue2 = Venue.create!(name: 'Forrest Hills Stadium' , address: '1 Tennis Pl', city: 'Forrest Hills', state: 'NY', country: 'United States', latitude: 40.7196, longitude: -73.8498 )
venue3 = Venue.create!(name: 'Bowery Ballroom', address: '6 Delancey St', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7204, longitude: -73.9934)
venue4 = Venue.create!(name: 'Barclays Center', address: '620 Atlantic Ave', city: 'Brooklyn', state: 'NY', country: 'United States', latitude: 40.6828, longitude: -73.9758)
venue5 = Venue.create!(name: 'Hammerstein Ballroom', address: '311 W 34th St', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7528, longitude: -73.9942)

Event.destroy_all

event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 28 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue1.id)
event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 27 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue2.id)
event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 26 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue3.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 30 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue1.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 25 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue2.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 24 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue3.id)
event3 = Event.create!(event_on: (DateTime.parse("Sat Jan 23 19:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue1.id)
event4 = Event.create!(event_on: (DateTime.parse("Sun Feb 22 20:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue2.id)
event4 = Event.create!(event_on: (DateTime.parse("Sun Feb 21 20:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue3.id)
event5 = Event.create!(event_on: (DateTime.parse("Thu Mar 20 18:00:00 EST 2018")), artist_id: artist7.id, venue_id: venue1.id)
event6 = Event.create!(event_on: (DateTime.parse("Fri Apr 19 19:00:00 EST 2018")), artist_id: artist7.id, venue_id: venue2.id)
event7 = Event.create!(event_on: (DateTime.parse("Fri Jun 18 20:00:00 EST 2018")), artist_id: artist8.id, venue_id: venue2.id)
event8 = Event.create!(event_on: (DateTime.parse("Thu Feb 17 18:00:00 EST 2018")), artist_id: artist8.id, venue_id: venue3.id)
event9 = Event.create!(event_on: (DateTime.parse("Sat Apr 16 19:00:00 EST 2018")), artist_id: artist9.id, venue_id: venue3.id)
event10 = Event.create!(event_on: (DateTime.parse("Wed Jan 15 20:00:00 EST 2018")), artist_id: artist9.id, venue_id: venue4.id)
event11 = Event.create!(event_on: (DateTime.parse("Thu May 14 19:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue5.id)
event12 = Event.create!(event_on: (DateTime.parse("Fri Mar 13 18:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue1.id)
event13 = Event.create!(event_on: (DateTime.parse("Wed Jan 12 20:00:00 EST 2018")), artist_id: artist10.id, venue_id: venue2.id)
event14 = Event.create!(event_on: (DateTime.parse("Thu Feb 11 20:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue3.id)
event15 = Event.create!(event_on: (DateTime.parse("Fri Sep 10 19:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue4.id)
event16 = Event.create!(event_on: (DateTime.parse("Sat Jan 09 20:45:00 EST 2018")), artist_id: artist11.id, venue_id: venue1.id)
event17 = Event.create!(event_on: (DateTime.parse("Sat Apr 08 19:45:00 EST 2018")), artist_id: artist11.id, venue_id: venue2.id)
event18 = Event.create!(event_on: (DateTime.parse("Fri Jul 07 19:30:00 EST 2018")), artist_id: artist11.id, venue_id: venue4.id)
event19 = Event.create!(event_on: (DateTime.parse("Fri Sep 06 19:45:00 EST 2018")), artist_id: artist13.id, venue_id: venue3.id)
event20 = Event.create!(event_on: (DateTime.parse("Sat Apr 05 20:30:00 EST 2018")), artist_id: artist13.id, venue_id: venue2.id)
event21 = Event.create!(event_on: (DateTime.parse("Fri May 04 17:30:00 EST 2018")), artist_id: artist15.id, venue_id: venue4.id)
event22 = Event.create!(event_on: (DateTime.parse("Thu Jul 03 19:00:00 EST 2018")), artist_id: artist15.id, venue_id: venue5.id)
event23 = Event.create!(event_on: (DateTime.parse("Sat Apr 02 20:00:00 EST 2018")), artist_id: artist17.id, venue_id: venue1.id)
event24 = Event.create!(event_on: (DateTime.parse("Fri Feb 01 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue3.id)
event25 = Event.create!(event_on: (DateTime.parse("Fri Sep 30 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue5.id)
event26 = Event.create!(event_on: (DateTime.parse("Fri Jan 29 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue4.id)
event27 = Event.create!(event_on: (DateTime.parse("Fri Jul 28 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue2.id)
event28 = Event.create!(event_on: (DateTime.parse("Fri Mar 27 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue3.id)
event29 = Event.create!(event_on: (DateTime.parse("Fri Mar 26 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue1.id)
event30 = Event.create!(event_on: (DateTime.parse("Fri Feb 25 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue2.id)

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
tracking7 = Tracking.create!(user_id: currentUser.id , artist_id: artist15.id)
tracking8 = Tracking.create!(user_id: currentUser.id , artist_id: artist18.id)
tracking9 = Tracking.create!(user_id: currentUser.id , artist_id: artist4.id)
tracking10 = Tracking.create!(user_id: currentUser.id , artist_id: artist12.id)
tracking11 = Tracking.create!(user_id: currentUser.id , artist_id: artist19.id)

Comment.destroy_all

comment1 = Comment.create!(body: "This show was so fun!", user_id: currentUser.id, event_id: event1.id)
comment2 = Comment.create!(body: "I would definitely see them again", user_id: currentUser.id, event_id: event1.id)
