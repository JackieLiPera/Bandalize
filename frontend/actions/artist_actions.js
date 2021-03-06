import * as ArtistApiUtil from '../util/artist_api_util'
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  }
};

export const receiveArtist = ({ artist, events = [], venues= [], comments = [], trackings = [], users= [] }) => {
  return {
    type: RECEIVE_ARTIST,
    artist,
    events,
    venues,
    comments,
    trackings,
    users
  }
};

export const fetchArtists = () => dispatch => (
  ArtistApiUtil.fetchArtists().then((artists) => dispatch(receiveArtists(artists)))
);

export const fetchArtist = (id) => dispatch => (
  ArtistApiUtil.fetchArtist(id).then((artist) => dispatch(receiveArtist(artist)))
);
