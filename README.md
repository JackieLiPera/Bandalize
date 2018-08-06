**Bandalize**

Bandalize is full-stack, single-page application built with React.js and Ruby on Rails inspired by the popular live-music site BandsInTown.

Check out the live link here [](https://jackielipera.github.io/Bandalize/)

**Features**

**User Auth**

Users can sign up and log in using the app modal. Click the demo button to start exploring!

**Event Home Page with Geolocation**

The app homepage allows users to see events in their area using browser location. Event images are handled with Rails Active Storage and the AWS s3 cloud.

**User Account Page**
![Imgur](https://i.imgur.com/QfXryqw.png)

The user page is inspired by the BandsInTown mobile app. Every user can see their own unique list of tracked artists and RSVP'd events. At the top, users can view their suggested events based on artists they track.

**Event Page**
![Imgur](https://i.imgur.com/ajYg3cn.png)

The event page is both for upcoming events and events that have already happened. For upcoming events, users can RSVP or click a link to buy tickets from StubHub. For events that have already happened, users can share their experiences and post personal photos from the concert.

**Genre Page**

*Coming soon* Users will be able to scroll through artists based on their genre of choice. A list of genres are located on the homepage.

**Artist Page & Artist Tracking**
![Imgur](https://i.imgur.com/4jCU9qv.png)

The artist page displays three key pieces of information: number of trackers, tour status and upcoming events. If the artist is on tour, users can view their upcoming events and RSVP to those events directly. Users can use the track button to receive future events on their account page.  

The tracking feature allows users to follow specific artists. Users can see how many trackers an artist has by clicking on the artist page. Once a user tracks an artist, the artist will appear on the user account page and future events will be incorporated into the user's suggested events feed.

**Event RSVPs**
![Imgur](https://i.imgur.com/08QBLEm.png)

The RSVP feature allows users to show off what events they're going to. RSVPs also appear on the event page so you can see how many other people are attending an event. Clicking the RSVP button will add the event to the users account page.

**Venue Page with Google API Map**
![Imgur](https://i.imgur.com/QtScamh.png)

The venue page displays all of the key information about a particular venue. Including all location information and a map linked to Google Maps API. Users can view upcoming events at any venue of their choice.

**Search Bar**

*Coming soon* For quick accessibility to any artist page, users can use the search feature located in the navigation bar. (Something about searchable)

**Loading**

During fetches to the backend server, a simple "Loading..." is displayed as the user waits for content.
