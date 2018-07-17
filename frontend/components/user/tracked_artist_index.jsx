import React from 'react';
import TrackedArtistIndexItem from './tracked_artist_index_item';

const TrackedArtistIndex = ({ artists }) => {

  const mappedArtists = artists.map((artist) => {
    return <li><TrackedArtistIndexItem artist={artist} /></li>
  });

  return (
    <ul className="tracked-artists-list">
      {mappedArtists}
    </ul>
  );
};

export default TrackedArtistIndex;
