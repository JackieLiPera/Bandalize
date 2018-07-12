export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
import * as ApiArtistUtil from '../util/artist_api_util'


export const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  artist
});


export const fetchArtists = () => dispatch => (
  ApiArtistUtil.fetchArtists().then((artists) => dispatch(receiveArtists(artists)))
);

export const fetchArtist = (id) => dispatch => (
  ApiArtistUtil.fetchArtist(id).then((artist) => dispatch(receiveArtist(artist)))
);
