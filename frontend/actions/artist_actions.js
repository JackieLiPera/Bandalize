import * as ApiArtistUtil from '../util/artist_api_util'
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";


export const receiveArtists = (artists) => {
  console.log(artists)
  return {
  type: RECEIVE_ARTISTS,
  artists
}
};

export const receiveArtist = ({artist, events, venues}) => ({
  type: RECEIVE_ARTIST,
  artist,
  events,
  venues
});


export const fetchArtists = () => dispatch => (
  ApiArtistUtil.fetchArtists().then((artists) => dispatch(receiveArtists(artists)))
);

export const fetchArtist = (id) => dispatch => (
  ApiArtistUtil.fetchArtist(id).then((artist) => dispatch(receiveArtist(artist)))
);
