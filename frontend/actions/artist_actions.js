import * as ArtistApiUtil from '../util/artist_api_util'
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_SEARCHED_ARTISTS = 'RECEIVE_SEARCHED_ARTISTS';


export const receiveArtists = (artists) => {
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

export const receiveSearchedArtists = searchedArtists => {
  return {
    type: RECEIVE_SEARCHED_ARTISTS,
    searchedArtists
  };
};


export const fetchArtists = () => dispatch => (
  ArtistApiUtil.fetchArtists().then((artists) => dispatch(receiveArtists(artists)))
);

export const fetchArtist = (id) => dispatch => (
  ArtistApiUtil.fetchArtist(id).then((artist) => dispatch(receiveArtist(artist)))
);

export const fetchSearchedArtists = query => dispatch => {
  return ArtistApiUtil.searchArtists(query).then(artists => {
    dispatch(receiveSearchedArtists(artists));
  });
};
