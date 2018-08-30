import React from "react";
import ArtistEventIndex from "./artist_event_index";
import CommentIndex from "./comment_index";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTracking: this.props.tracking,
      loading: true,
      comment: "",
      photoFile: null
    };

    this.handleTracking = this.handleTracking.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handlePictureUpload = this.handlePictureUpload.bind(this);
    this.generateTrackButton = this.generateTrackButton.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchArtist(this.props.match.params.id)
      .then(success => this.setState({ loading: false }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchArtist(nextProps.match.params.id);
    }
  }

  handleTracking() {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      this.props.openModal("login");
      return;
    }

    const artist = this.props.artist;
    const track = this.props.trackings[currentUser.id];
    if (this.state.isTracking) {
      this.props
        .deleteTracking(track.id, artist.id)
        .then(this.setState({ isTracking: false }))
        .then(this.generateTrackButton.bind(this));
    } else {
      this.props
        .createTracking(currentUser.id, artist.id)
        .then(this.setState({ isTracking: true }))
        .then(this.generateTrackButton.bind(this));
    }
  }

  generateTrackButton() {
    if (this.state.isTracking) {
      return (
        <button
          onClick={this.handleTracking}
          className="artist-track-button-tracked"
        >
          {" "}
          &#10004; Tracked
        </button>
      );
    } else {
      return (
        <button onClick={this.handleTracking} className="artist-track-button">
          Track
        </button>
      );
    }
  }

  handleCommentChange(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handlePictureUpload(e) {
    this.setState({
      photoFile: e.currentTarget.files[0]
    });
  }

  handleCommentSubmit(e) {
    e.preventDefault();

    if (!this.props.currentUser) {
      this.props.openModal("login");
      return;
    }

    const formData = new FormData();
    formData.append("comment[body]", this.state.comment);
    formData.append("comment[user_id]", this.props.currentUser.id);
    formData.append("comment[artist_id]", this.props.artist.id);
    formData.append("comment[photo]", this.state.photoFile);

    this.setState({
      comment: ""
    });

    this.props.processForm(formData);
  }

  render() {
    const bluecheck = window.bluecheck;
    const artist = this.props.artist || {};

    if (this.state.loading === true) {
      return <img className="loading" src={window.loadingGif} />;
    }

    const commentForm = (
      <form className="comment-form" onSubmit={this.handleCommentSubmit}>
        <label className="comment-form-title">Share your experience:</label>
        <textarea
          className="comment-box"
          onChange={this.handleCommentChange}
          value={this.state.comment}
        />
        <div className="comment-form-buttons">
          <input type="file" onChange={this.handlePictureUpload} />
          <button>Submit</button>
        </div>
      </form>
    );

    return (
      <div className="artist-show-component">
        <div className="artist-show-container">
          <div>
            <img src={artist.image} className="artist-show-image" />
            <div className="artist-show-info">
              <ul>
                <li>
                  <h2>
                    {artist.name} <img src={bluecheck} />
                  </h2>
                </li>
                <li>
                  <span className="trackers-info">
                    {artist.trackers.length} Trackers
                  </span>{" "}
                  · <span className="tour-info">{this.props.tour}</span>
                </li>
              </ul>
            </div>
            {this.generateTrackButton()}
          </div>
          <span className="artist-show-headers">About {`${artist.name}`}</span>
          <div className="artist-bio">
            <span className="genre">
              {" "}
              <h3>Genre:</h3> <span />
              {" " + artist.genre}
            </span>
            <br />
            <br />
            <span>
              <i className="fab fa-facebook-square" />{" "}
              <a href={`https://facebook.com/${artist.name}`}>Facebook</a>
            </span>
            <br />
            <p className="artist-bio-paragraph">{artist.bio}</p>
          </div>
        </div>
        <div>
          <ArtistEventIndex
            events={this.props.events}
            venues={this.props.venues}
            currentUser={this.props.currentUser}
            tracking={this.props.tracking}
            createRsvp={this.props.createRsvp}
            deleteRsvp={this.props.deleteRsvp}
            rsvps={this.props.rsvps}
            artistEvents={artist.artistEvents}
            openModal={this.props.openModal}
          />
          <div className="comments">
            {commentForm}
            <CommentIndex
              comments={this.props.comments}
              currentUser={this.props.currentUser}
              deleteComment={this.props.deleteComment}
              artist={artist}
              users={this.props.users}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
