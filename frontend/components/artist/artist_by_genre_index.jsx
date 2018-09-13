import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ArtistByGenreIndexItem from "./artist_by_genre_index_item";

const ArtistByGenreIndex = () => {
  const genres = ["Rock", "Electronic", "Pop", "Alternative", "Folk", "R&B"];
  let list;
  list = genres.map(genre => {
    let classname;
    if (genre === "R&B") {
      classname = "r-b";
    } else {
      classname = genre.toLowerCase();
    }

    return (
      <Link to={`api/artists/${classname}`}>
        <li key={genre} className={classname}>
          {genre}
        </li>
      </Link>
    );
  });

  return <ul className="genre-list">{list}</ul>;
};

const mdp = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists())
  };
};

export default connect(
  null,
  mdp
)(ArtistByGenreIndex);
