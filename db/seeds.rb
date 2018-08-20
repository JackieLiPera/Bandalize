# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

currentUser = User.create!(email: 'jac.lipera@gmail.com', password: 'jackie', firstname: 'Jackie', lastname: 'LiPera')
100.times do |n|
  name = (Faker::Name.name).split(' ')
  email = Faker::Internet.email

  User.create!(email: email, password: "123456", firstname: name[0], lastname: name[1]);
end

Artist.destroy_all

artist1 = Artist.create!(name:"Red Hot Chili Peppers", on_tour: false, genre:"Rock", bio: "Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. The group's musical style primarily consists of rock with an emphasis on funk, as well as elements from other genres such as punk rock and psychedelic rock. RHCP is the single greatest band of all time.")
artist2 = Artist.create!(name:"Rainbow Kitten Surprise", on_tour: true, genre:"Alternative", bio: "Rainbow Kitten Surprise and all five of its members hail from the mountains of Boone, North Carolina. With chilling harmonies, dynamic instrumentation, and introspective lyrics, their genre-defying sound takes influence from artists like Modest Mouse and Kings of Leon as much as Frank Ocean and Schoolboy Q. Independently, they have over 75 million streams across digital platforms, and notched over 45 sold out shows on their first U.S. headline tour.")
artist3 = Artist.create!(name:"Kendrick Lamar", on_tour: false, genre:"R&B", bio: "Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper, songwriter, and record producer. Raised in Compton, California, Lamar embarked on his musical career as a teenager under the stage name K-Dot, releasing a mixtape that garnered local attention and led to his signing with indie record label Top Dawg Entertainment (TDE). He is currently working on his debut album, and alongside legendary producer Dr. Dre on his highly anticipated upcoming release Detox.")
artist4 = Artist.create!(name:"Maroon 5", on_tour: true, genre:"Pop", bio: "Maroon 5 is an American pop rock band from Los Angeles, California. It currently consists of lead vocalist Adam Levine, keyboardist and rhythm guitarist Jesse Carmichael, bassist Mickey Madden, lead guitarist James Valentine, drummer Matt Flynn, keyboardist PJ Morton and multi-instrumentalist Sam Farrar.")
artist5 = Artist.create!(name:"Taylor Swift", on_tour: false, genre:"Pop", bio: "Taylor Alison Swift (born December 13, 1989 - the same birthday as Bandalize creator Jackie Li Pera) is an American singer-songwriter. One of the world's leading contemporary recording artists, she is known for narrative songs about her personal life, which have received widespread media coverage.")
artist6 = Artist.create!(name:"Glass Animals", on_tour: true, genre:"Alternative", bio: "Glass Animals are an English indie rock band from Oxford consisting of members Dave Bayley (lead vocals, guitar), Drew MacFarlane (guitar, keys, backing vocals), Edmund Irwin-Singer (bass, keys, backing vocals), and Joe Seaward (drums). 'How To Be A Human Being' the new album is out now. Listen to new songs 'Life Itself' and 'Youth' via the bands website.")
artist7 = Artist.create!(name:"Shakira", on_tour: true, genre:"Pop", bio: "Shakira is a Colombian singer, songwriter, dancer, record producer, businesswoman, philanthropist and goodwill ambassador for UNICEF. Born and raised in Barranquilla, she began performing in school, demonstrating Latin American, Arabic, and rock and roll influences and belly dancing abilities.")
artist8 = Artist.create!(name:"The Weeknd", on_tour: true, genre:"R&B", bio: "Abel Makkonen Tesfaye (born 16 February 1990), known by his stage name The Weeknd, is a Canadian singer, songwriter, and record producer. Tesfaye anonymously uploaded several songs to YouTube under the name 'The Weeknd' in 2010 and released the critically acclaimed mixtapes House of Balloons, Thursday, and Echoes of Silence in 2011. The mixtapes were later remastered and rereleased on the compilation album Trilogy (2012), after he signed with Republic Records and created his own record label XO.")
artist9 = Artist.create!(name:"Drake", on_tour: true, genre:"R&B", bio: "Aubrey “Drake” Graham (born October 24, 1986 in Toronto, Ontario) is a Canadian actor, rapper and singer signed to Universal Records.")
artist10 = Artist.create!(name:"Kings of Leon", on_tour: true, genre:"Rock", bio: "Kings of Leon is an American rock band that formed in Nashville, Tennessee, in 1999. The band is composed of brothers Caleb Followill (b. January 14, 1982, lead vocals, rhythm guitar), Nathan Followill (b. June 26, 1979, drums, percussion, backing vocals) and Jared Followill (b. November 20, 1986, bass guitar, backing vocals), with their cousin Matthew Followill (b. September 10, 1984, lead guitar, backing vocals).")
artist11 = Artist.create!(name:"Ed Sheeran", on_tour: true, genre:"Pop", bio: "Edward Christopher Sheeran, MBE (/ˈʃɪərən/; born 17 February 1991) is an English singer, songwriter, guitarist, record producer, and actor. Sheeran was born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk. He attended the Academy of Contemporary Music in Guildford as an undergraduate from the age of 18 in 2009. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project.")
artist12 = Artist.create!(name:"Milky Chance", on_tour: false, genre:"Alternative", bio: "Milky Chance is a German folk group originating from Kassel. It consists of lead vocalist and guitarist Clemens Rehbein, producer and percussionist Philipp Dausch, guitarist Antonio Greger and drummer Sebastian Schmidt. Their first single 'Stolen Dance' was released in April 2013, peaking at No. 1 on charts in multiple countries including Austria, Belgium (Wallonia), Czech Republic, France, Hungary, Poland, and Switzerland.")
artist13 = Artist.create!(name:"Weezer", on_tour: true, genre:"Rock", bio: "Weezer is an American rock band formed in Los Angeles, California in 1992. The band currently consists of Rivers Cuomo (lead vocals, lead guitar, keyboards), Patrick Wilson (drums), Brian Bell (guitar, backing vocals, keyboards), and Scott Shriner (bass, backing vocals). After signing to Geffen Records in 1993, Weezer released their debut self-titled album, also known as the 'Blue Album', in 1994. Backed by successful music videos for the singles 'Buddy Holly', 'Undone' and 'Say It Ain't So', the Blue Album became a 3x platinum success. Their second album, Pinkerton (1996), featuring a darker, more abrasive sound, was a commercial failure and initially received mixed reviews, but went on to achieve cult status and critical acclaim years later. Both the Blue Album and Pinkerton are now frequently cited among the best albums of the 1990s.")
artist14 = Artist.create!(name:"Alt-J", on_tour: false, genre:"Alternative", bio: "Alt-J (stylised as alt-J, or ∆) is an English indie rock band formed in 2007 in Leeds, by Joe Newman (guitar/lead vocals), Thom Sonny Green (drums), Gusset Unger-Hamilton (keyboards/vocals) and Gwil Sainsbury (guitar/bass).")
artist15 = Artist.create!(name:"The xx", on_tour: true, genre:"Electronic", bio: "The xx are an English indie pop band from Wandsworth, London, formed in 2005. The band consists of Romy Madley Croft (guitar, vocals), Oliver Sim (bass, vocals), Jamie Smith, also known as Jamie xx (beats, MPC, record production), and formerly Baria Qureshi (keyboard, guitar). They are known for their distinct and minimalistic sound that blends indie pop, indie electronic, dream pop and electro-rock and the dual vocalist setup of both Croft and Sim. Their music employs soft, echoed guitar, prominent bass, light electronic beats and ambient soundscape backgrounds.")
artist16 = Artist.create!(name:"Shakey Graves", on_tour: false, genre:"Folk", bio: "Shakey Graves (born Alejandro Rose-Garcia on June 4, 1987) is an Americana musician from Austin, Texas.

His music combines blues, folk, and rock and roll. Rose-Garcia received his stage name at Old Settler's Music Festival in 2007 after he and his friends jokingly gave each other Indian guide names over a campfire. After an inspired night of playing music, he decided to keep the name.")
artist17 = Artist.create!(name:"Childish Gambino", on_tour: true, genre:"R&B", bio: "Donald McKinley Glover Jr. (born September 25, 1983) is an American actor, comedian, writer, director, rapper, and DJ. He performs music under the stage name Childish Gambino and as a DJ under the name mcDJ.")
artist18 = Artist.create!(name:"Arctic Monkeys", on_tour: true, genre:"Rock", bio: "Arctic Monkeys are an English rock band formed in 2002 in High Green, a suburb of Sheffield. The band consists of Alex Turner (lead vocals, guitar, piano), Matt Helders (drums, vocals), Jamie Cook (guitar) and Nick O'Malley (bass guitar, backing vocals). Former band member Andy Nicholson (bass guitar, backing vocals) left the band in 2006 shortly after their debut album was released.")
artist19 = Artist.create!(name:"Sublime", on_tour: false, genre:"Rock", bio: "Sublime was an American ska punk band from Long Beach, California, formed in 1988. The band's line-up, unchanged until their breakup, consisted of Bradley Nowell (vocals and guitar), Eric Wilson (bass), and Bud Gaugh (drums). Lou Dog, Nowell's dalmatian, was the mascot of the band. Nowell died of a heroin overdose in 1996, resulting in Sublime's breakup. In 1997, posthumous songs such as What I Got, Santeria, Wrong Way, Doin' Time, and April 29, 1992 (Miami) were released to U.S. radio.")
artist20 = Artist.create!(name:"ODESZA", on_tour: true, genre:"Electronic", bio: "ODESZA[ (/oʊˈdɛsə/) are an American electronic music band, originating from Bellingham, Washington. It consists of Harrison Mills and Clayton Knight, known individually as Catacombkid and BeachesBeaches. They formed in 2012, shortly before Mills and Knight graduated from Western Washington University. Additionally, ODESZA is composed of a complete brass section, drum line, and vocal singers including Naomi Wild and WYNNE, among others.")
artist21 = Artist.create!(name:"Florence and The Machine", on_tour: true, genre:"Alternative", bio: "Florence and the Machine (stylised as Florence + the Machine) are an English indie rock band that formed in London in 2007, consisting of vocalist Florence Welch, keyboardist Isabella Summers, and a collaboration of other musicians. The band's music received praise across the media, especially from the BBC, which played a large part in their rise to prominence by promoting Florence and the Machine as part of BBC Introducing. At the 2009 Brit Awards they received the Brit Awards Critics\' Choice award. The band\'s music is renowned for its dramatic and eccentric production and also Welch\'s powerful vocal performances.")
artist22 = Artist.create!(name:"J.Cole", on_tour: true, genre:"R&B", bio: "Jermaine Lamarr Cole (born January 28, 1985) is an American rapper, singer, songwriter and record producer. Born on a military base in Germany but raised in Fayetteville, North Carolina, Cole initially gained recognition as a rapper following the release of his debut mixtape, The Come Up, in early 2007. Intent on further pursuing a solo career as a rapper, he went on to release two additional mixtapes, The Warm Up and Friday Night Lights after signing to Jay-Z's Roc Nation imprint in 2009.")
artist23 = Artist.create!(name:"Gorillaz", on_tour: false, genre:"Alternative", bio: "Gorillaz are a British virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett. The band primarily consists of four animated members: 2-D (lead vocals, keyboards), Murdoc Niccals (bass guitar, replaced by Ace D. Copular while incarcerated), Noodle (guitar, keyboards), and Russel Hobbs (drums and percussion). Their fictional universe is explored through music videos, interviews, and other short cartoons. In reality, Albarn is the only permanent musical contributor, and often collaborates with other musicians.")
artist24 = Artist.create!(name:"Panic! At The Disco", on_tour: true, genre:"Rock", bio: "Panic! at the Disco is an American rock band from Las Vegas, Nevada, formed in 2004 by childhood friends Brendon Urie, Ryan Ross, Spencer Smith and Brent Wilson. Since 2015, vocalist Urie is the only official member in the band, supported on tours by guitarist Kenneth Harris, drummer Dan Pawlovich, and bassist Nicole Row. Panic! at the Disco recorded its first demos while its members were in high school. Shortly after, the band recorded and released its debut studio album, A Fever You Can't Sweat Out (2005). Popularized by the second single, I Write Sins Not Tragedies, the album was certified double platinum in the US. In 2006, founding bassist Brent Wilson was fired from the band during an extensive world tour and subsequently replaced by Jon Walker.")
artist25 = Artist.create!(name:"Fall Out Boy", on_tour: false, genre:"Alternative", bio: "Fall Out Boy is an American rock band formed in Wilmette, Illinois, a suburb of Chicago, in 2001. The band consists of lead vocalist and rhythm guitarist Patrick Stump, bassist Pete Wentz, lead guitarist Joe Trohman, and drummer Andy Hurley. The band originated from Chicago's hardcore punk scene, with which all members were involved at one point. The group was formed by Wentz and Trohman as a pop punk side project of the members' respective hardcore bands, and Stump joined shortly thereafter. The group went through a succession of drummers before landing Hurley and recording the group's debut album, Take This to Your Grave (2003). The album became an underground success and helped the band gain a dedicated fanbase through heavy touring, as well as some moderate commercial success. Take This to Your Grave has commonly been cited as an influential blueprint for pop punk music in the 2000s.")
artist26 = Artist.create!(name:"P!nk", on_tour: true, genre:"Pop", bio: "Alecia Beth Moore (born September 8, 1979), known professionally as Pink (stylized as P!nk), is an American singer, songwriter, dancer, and actress. She was originally a founder of R&B girl group Choice in 1995. LaFace Records saw potential in Pink and offered her a solo recording contract. Her R&B-sounding debut album, Can't Take Me Home (2000), was certified double-platinum in the US and spawned two US Billboard Hot 100 top-ten songs: There You Go and Most Girls. She gained further recognition with the collaborative single Lady Marmalade from the Moulin Rouge! soundtrack, which topped many charts worldwide. Pink's musical direction moved away to pop rock with her second album, Missundaztood (2001).")
artist27 = Artist.create!(name:"Gary Clark Jr.", on_tour: false, genre:"Rock", bio: "Gary Lee Clark Jr. (born February 15, 1984) is an American musician from Austin, Texas. He is best known for his fusion of blues, rock and soul music with elements of hip hop. Clark has shared the stage with many legends of rock and roll, including Eric Clapton, B. B. King and the Rolling Stones.")
artist28 = Artist.create!(name:"Tyler, The Creator", on_tour: true, genre:"R&B", bio: "Tyler Gregory Okonma (born March 6, 1991), commonly known by his stage name Tyler, the Creator, is an American rapper, record producer, and music video director. He rose to prominence as the co-founder and de facto leader of the alternative hip hop collective Odd Future, and has performed on and produced songs for nearly every Odd Future release. Okonma created all the artwork for the group's releases and also designed the group's clothing and other merchandise.")
artist29 = Artist.create!(name:"Deadmau5", on_tour: true, genre:"Electronic", bio: "Joel Thomas Zimmerman (born January 5, 1981), known professionally as deadmau5 (pronounced dead mouse), is a Canadian electronic music producer, DJ, musician, and composer. Zimmerman produces a variety of styles within the progressive house genre and sometimes other forms of electronic music. His works have been included in numerous compilation albums, such as Tiësto's In Search of Sunrise 6: Ibiza, and his tracks have also been included and presented on Armin van Buuren's A State of Trance radio show.")
artist30 = Artist.create!(name:"BØRNS", on_tour: true, genre:"Electronic", bio: "Garrett Clark Borns (born January 7, 1992), better known by his stage name Børns (stylized as BØRNS), is an American singer, songwriter, and multi-instrumentalist. Born and raised in Grand Haven, Michigan, Borns began performing in his youth. In 2012, he released his debut album, A Dream Between, through REZidual Records. His first major label release was the Candy EP (2014), through Geffen and Interscope. The EP peaked at number two on the Billboard Heatseekers chat. The Dopamine tour followed, preceding his debut studio album of the same name in 2015. The album was a commercial success, peaking at number 24 in the US and generating numerous singles include the platinum-certified, Electric Love. ")

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
artist21.photo.attach(io: File.open('./app/assets/images/artist_photos/fam.jpg'), filename: 'fam.jpg')
artist22.photo.attach(io: File.open('./app/assets/images/artist_photos/jcole.jpg'), filename: 'jcole.jpg')
artist23.photo.attach(io: File.open('./app/assets/images/artist_photos/gorillaz.jpg'), filename: 'gorillaz.jpg')
artist24.photo.attach(io: File.open('./app/assets/images/artist_photos/panic.png'), filename: 'panic.png')
artist25.photo.attach(io: File.open('./app/assets/images/artist_photos/fob.jpg'), filename: 'fob.jpg')
artist26.photo.attach(io: File.open('./app/assets/images/artist_photos/pink.jpg'), filename: 'pink.jpg')
artist27.photo.attach(io: File.open('./app/assets/images/artist_photos/GaryClark.jpg'), filename: 'GaryClark.jpg')
artist28.photo.attach(io: File.open('./app/assets/images/artist_photos/tyler.png'), filename: 'tyler.png')
artist29.photo.attach(io: File.open('./app/assets/images/artist_photos/Deadmau.jpg'), filename: 'Deadmau.jpg')
artist30.photo.attach(io: File.open('./app/assets/images/artist_photos/borns.png'), filename: 'borns.png')

Venue.destroy_all

venue1 = Venue.create!(name: 'Madison Square Garden', address: '4 Pennsylvania Plaza', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7505, longitude: -73.9934)
venue2 = Venue.create!(name: 'Forrest Hills Stadium' , address: '1 Tennis Pl', city: 'Forrest Hills', state: 'NY', country: 'United States', latitude: 40.7196, longitude: -73.8498 )
venue3 = Venue.create!(name: 'Bowery Ballroom', address: '6 Delancey St', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7204, longitude: -73.9934)
venue4 = Venue.create!(name: 'Barclays Center', address: '620 Atlantic Ave', city: 'Brooklyn', state: 'NY', country: 'United States', latitude: 40.6828, longitude: -73.9758)
venue5 = Venue.create!(name: 'Hammerstein Ballroom', address: '311 W 34th St', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7528, longitude: -73.9942)
venue6 = Venue.create!(name: 'Irving Plaza', address: '17 Irving Plaza', city: 'New York', state: 'NY', country: 'United States', latitude: 40.7349, longitude: -73.9884)
venue7 = Venue.create!(name: 'MetLife Stadium', address: '1 MetLife Stadium Dr', city: 'East Rutherford', state: 'NY', country: 'United States', latitude: 40.8128, longitude: -74.0742)

Event.destroy_all

event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 28 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue1.id)
event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 27 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue2.id)
event1 = Event.create!(event_on: (DateTime.parse("Thu Nov 26 20:30:00 EST 2018")), artist_id: artist2.id, venue_id: venue3.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 30 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue1.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 25 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue2.id)
event2 = Event.create!(event_on: (DateTime.parse("Fri Dec 24 18:00:00 EST 2018")), artist_id: artist4.id, venue_id: venue3.id)
event3 = Event.create!(event_on: (DateTime.parse("Sat Sep 23 19:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue1.id)
event4 = Event.create!(event_on: (DateTime.parse("Sun Oct 22 20:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue2.id)
event4 = Event.create!(event_on: (DateTime.parse("Sun Oct 21 20:00:00 EST 2018")), artist_id: artist6.id, venue_id: venue3.id)
event5 = Event.create!(event_on: (DateTime.parse("Thu Mar 20 18:00:00 EST 2018")), artist_id: artist7.id, venue_id: venue1.id)
event6 = Event.create!(event_on: (DateTime.parse("Fri Nov 19 19:00:00 EST 2018")), artist_id: artist7.id, venue_id: venue2.id)
event7 = Event.create!(event_on: (DateTime.parse("Fri Jun 18 20:00:00 EST 2018")), artist_id: artist8.id, venue_id: venue2.id)
event8 = Event.create!(event_on: (DateTime.parse("Thu Oct 17 18:00:00 EST 2018")), artist_id: artist8.id, venue_id: venue3.id)
event9 = Event.create!(event_on: (DateTime.parse("Sat Nov 16 19:00:00 EST 2018")), artist_id: artist9.id, venue_id: venue3.id)
event10 = Event.create!(event_on: (DateTime.parse("Wed Sep 15 20:00:00 EST 2018")), artist_id: artist9.id, venue_id: venue4.id)
event11 = Event.create!(event_on: (DateTime.parse("Thu May 14 19:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue5.id)
event12 = Event.create!(event_on: (DateTime.parse("Fri Mar 13 18:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue1.id)
event13 = Event.create!(event_on: (DateTime.parse("Wed Sep 12 20:00:00 EST 2018")), artist_id: artist10.id, venue_id: venue2.id)
event14 = Event.create!(event_on: (DateTime.parse("Thu Oct 11 20:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue3.id)
event15 = Event.create!(event_on: (DateTime.parse("Fri Sep 10 19:30:00 EST 2018")), artist_id: artist10.id, venue_id: venue4.id)
event16 = Event.create!(event_on: (DateTime.parse("Sat Sep 09 20:45:00 EST 2018")), artist_id: artist11.id, venue_id: venue1.id)
event17 = Event.create!(event_on: (DateTime.parse("Sat Nov 08 19:45:00 EST 2018")), artist_id: artist11.id, venue_id: venue2.id)
event18 = Event.create!(event_on: (DateTime.parse("Fri Jul 07 19:30:00 EST 2018")), artist_id: artist11.id, venue_id: venue4.id)
event19 = Event.create!(event_on: (DateTime.parse("Fri Sep 06 19:45:00 EST 2018")), artist_id: artist13.id, venue_id: venue3.id)
event20 = Event.create!(event_on: (DateTime.parse("Sat Nov 05 20:30:00 EST 2018")), artist_id: artist13.id, venue_id: venue2.id)
event21 = Event.create!(event_on: (DateTime.parse("Fri May 04 17:30:00 EST 2018")), artist_id: artist15.id, venue_id: venue4.id)
event22 = Event.create!(event_on: (DateTime.parse("Thu Jul 03 19:00:00 EST 2018")), artist_id: artist15.id, venue_id: venue5.id)
event23 = Event.create!(event_on: (DateTime.parse("Sat Nov 02 20:00:00 EST 2018")), artist_id: artist17.id, venue_id: venue1.id)
event24 = Event.create!(event_on: (DateTime.parse("Fri Oct 01 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue3.id)
event25 = Event.create!(event_on: (DateTime.parse("Fri Sep 30 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue5.id)
event26 = Event.create!(event_on: (DateTime.parse("Fri Sep 29 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue4.id)
event27 = Event.create!(event_on: (DateTime.parse("Fri Jul 28 21:00:00 EST 2018")), artist_id: artist18.id, venue_id: venue2.id)
event28 = Event.create!(event_on: (DateTime.parse("Fri Mar 27 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue3.id)
event29 = Event.create!(event_on: (DateTime.parse("Fri Mar 26 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue1.id)
event30 = Event.create!(event_on: (DateTime.parse("Fri Oct 25 21:00:00 EST 2018")), artist_id: artist20.id, venue_id: venue2.id)
event31 = Event.create!(event_on: (DateTime.parse("Fri Nov 04 17:30:00 EST 2018")), artist_id: artist21.id, venue_id: venue4.id)
event32 = Event.create!(event_on: (DateTime.parse("Thu Sep 03 19:00:00 EST 2018")), artist_id: artist21.id, venue_id: venue5.id)
event33 = Event.create!(event_on: (DateTime.parse("Sat Nov 02 20:00:00 EST 2018")), artist_id: artist22.id, venue_id: venue1.id)
event34 = Event.create!(event_on: (DateTime.parse("Fri Nov 01 21:00:00 EST 2018")), artist_id: artist22.id, venue_id: venue3.id)
event35 = Event.create!(event_on: (DateTime.parse("Fri Sep 30 21:00:00 EST 2018")), artist_id: artist28.id, venue_id: venue5.id)
event36 = Event.create!(event_on: (DateTime.parse("Fri Oct 29 21:00:00 EST 2018")), artist_id: artist28.id, venue_id: venue4.id)
event37 = Event.create!(event_on: (DateTime.parse("Fri Jul 28 21:00:00 EST 2018")), artist_id: artist30.id, venue_id: venue2.id)
event38 = Event.create!(event_on: (DateTime.parse("Fri Nov 27 21:00:00 EST 2018")), artist_id: artist30.id, venue_id: venue3.id)
event39 = Event.create!(event_on: (DateTime.parse("Thu Nov 26 21:00:00 EST 2018")), artist_id: artist30.id, venue_id: venue1.id)
event40 = Event.create!(event_on: (DateTime.parse("Fri Feb 25 21:00:00 EST 2018")), artist_id: artist29.id, venue_id: venue2.id)

Rsvp.destroy_all

rsvp1 = Rsvp.create!(user_id: currentUser.id, event_id: event5.id)
rsvp2 = Rsvp.create!(user_id: currentUser.id, event_id: event10.id)
rsvp3 = Rsvp.create!(user_id: currentUser.id, event_id: event15.id)
rsvp4 = Rsvp.create!(user_id: currentUser.id, event_id: event20.id)
rsvp5 = Rsvp.create!(user_id: currentUser.id, event_id: event25.id)
rsvp6 = Rsvp.create!(user_id: currentUser.id, event_id: event30.id)


400.times do |n|
  user_id = User.ids.sample
  event_id = Event.ids.sample

  Rsvp.create!(user_id: user_id, event_id: event_id) unless Rsvp.exists?(:user_id => user_id, :event_id => event_id)
end


Tracking.destroy_all

tracking1 = Tracking.create!(user_id: currentUser.id, artist_id: artist2.id)
tracking2 = Tracking.create!(user_id: currentUser.id, artist_id: artist6.id)
tracking3 = Tracking.create!(user_id: currentUser.id, artist_id: artist10.id)
tracking4 = Tracking.create!(user_id: currentUser.id, artist_id: artist14.id)
tracking5 = Tracking.create!(user_id: currentUser.id, artist_id: artist15.id)
tracking6 = Tracking.create!(user_id: currentUser.id, artist_id: artist22.id)

400.times do |n|
  user_id = User.ids.sample
  artist_id = Artist.ids.sample

  Tracking.create!(user_id: user_id, artist_id: artist_id) unless Tracking.exists?(:user_id => user_id, :artist_id => artist_id)
end

Comment.destroy_all

100.times do |n|
  user_id = User.ids.sample
  artist_id = Artist.ids.sample

  Comment.create!(body: Faker::Hipster.sentence, user_id: user_id, artist_id: artist_id)
end
