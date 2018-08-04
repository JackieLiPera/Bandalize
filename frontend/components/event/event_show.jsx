import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvpd: this.props.rsvpd,
      loading: true,
      comment: ""
    }

    this.changeRSVPStatus = this.changeRSVPstatus.bind(this);
    this.handleVenueClick = this.handleVenueClick.bind(this);
    this.handleArtistClick = this.handleArtistClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handlePictureUpload = this.handlePictureUpload.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id).then(
      success => this.setState({ loading: false })
    );
  }

  changeRSVPstatus(e) {
    if (this.state.rsvpd === true) {
        this.props.deleteRsvp(this.props.currentUser.id, this.props.event.id);
        this.setState({
          rsvpd: false
        });
    } else {
        this.props.createRsvp(this.props.currentUser.id, this.props.event.id);
        this.setState({
          rsvpd: true
        });
    }
  }

  handleVenueClick() {
    const venueId = this.props.venue.id;
    this.props.history.push(`/venues/${venueId}`);
  }

  handleArtistClick() {
    const artistId = this.props.artist.id;
    this.props.history.push(`/artists/${artistId}`);
  }

  handleCommentChange(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state.comment, this.props.currentUser.id, this.props.event.id);
  }

  handlePictureUpload() {}


  render() {

    if (this.state.loading === true) {
      return <div>Loading...</div>
    }

    let event = this.props.event;
    if (!event) {
      return null;
    }

    let comments = this.props.comments.map ((comment) => {
        return <li key={comment.id}>{comment.body} </li>
    });


    let rsvp_button;
    let stubHub_button;
    if ((this.props.happened) && this.state.rsvpd === true) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; I Was There</button>;
      stubHub_button = null;
    } else if (!(this.props.happened) && (this.state.rsvpd === true)) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; Going</button>;
      stubHub_button = <button className="ticket-button"> <a href="https://www.stubhub.com/">Get Tickets</a></button>;
    }
    if ((this.props.happened) && this.state.rsvpd === false) {
      rsvp_button = <button onClick={this.handleArtistClick} className="rsvp-button">See More Events</button>;
      stubHub_button = null;
    } else if ((!this.props.happened) && this.state.rsvpd === false) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button">RSVP</button>;
      stubHub_button = <button className="ticket-button"> <a href="https://www.stubhub.com/">Get Tickets</a></button>;
    }


    return (
      <div className="event-show-component">

        <div className="event-show-container">
          <img src={this.props.artist.image} className="artist-image"></img>
          <div className= "event-info">
            <h2 onClick={this.handleArtistClick}>{this.props.artist.name} <img src={bluecheck}/></h2>
            {this.props.dateString} @ {this.props.venue.name}
              <br></br>
            {this.props.venue.city}, {this.props.venue.state}
            {rsvp_button}
            {stubHub_button}
          </div>
        </div>

        <div className="event-description">
          <div>
            <ul>
              <li className="bold-date-string">{this.props.dateString}</li>
              <li className="event-venue-timestring">{this.props.timeString}</li>
                <br></br>
              <li className="event-venue-name" onClick={this.handleVenueClick}>{this.props.venue.name}</li>
              <li>{this.props.venue.address } {this.props.venue.city}, {this.props.venue.state}</li>
                <br></br>
              <li className='rsvp-display'>{this.props.event.rsvpd.length} RSVPs</li>
            </ul>
          </div>

          <br></br>

          <div className="comments">
            <form  className="comment-form" onSubmit={this.handleCommentSubmit}>
              <label className="comment-form-title">Share your experience:</label>
              <input className="comment-box" type="text" onChange={this.handleCommentChange} value={this.state.comment} />

              <div className="comment-form-buttons">
                <button onClick={this.handlePictureUpload}><i className="fas fa-camera"></i>  Add Photo</button>
                <button>Submit</button>
              </div>
            </form>
            <ul className="comments-index">
              {comments}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}


export default EventShow;
