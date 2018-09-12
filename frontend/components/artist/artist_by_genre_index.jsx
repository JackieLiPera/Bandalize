import React from "react";
import { connect } from "react-redux";
import ArtistByGenreIndexItem from "./artist_by_genre_index_item";

const ArtistByGenreIndex = ({}) => {
  const GenreArtistIndexItem = artists.map(artistId => {
    return (
      <li key={eventId}>
        <ArtistByGenreIndexItem currentUser={currentUser} />
      </li>
    );
  });

  return "";
};

const msp = (state, ownProps) => {
  return {};
};

export default connect(msp)(ArtistByGenreIndex);
