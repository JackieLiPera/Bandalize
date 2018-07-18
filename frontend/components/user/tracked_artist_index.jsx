import React from 'react';
import TrackedArtistIndexItem from './tracked_artist_index_item';

const TrackedArtistIndex = ({ artists }) => {

  const mappedArtists = artists.map((artist) => {
    return <li key={Math.floor(Math.random() * 1000000000)}><TrackedArtistIndexItem artist={artist} /></li>
  });

  return (
    <ul className="tracked-artists-list">
      {mappedArtists}
    </ul>
  );
};

export default TrackedArtistIndex;
