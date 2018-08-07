import React from 'react';
import TrackedArtistIndexItem from './tracked_artist_index_item';

const TrackedArtistIndex = ({ trackedArtists }) => {
  const mappedArtists = Object.values(trackedArtists).map((artist) => {
    return <li key={artist.id}><TrackedArtistIndexItem artist={artist} /></li>
  });

  if (mappedArtists.length === 0) {
    return <li className="empty-list">You are not tracking any artists yet!</li>
  }

  return (
    <ul className="tracked-artists-list">
      {mappedArtists}
    </ul>
  );
};

export default TrackedArtistIndex;
