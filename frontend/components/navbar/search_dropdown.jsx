import React from 'react';
import { Link } from 'react-router-dom';

class SearchDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput() {
    this.setState(
      { query: "" },
      () => this.props.searchArtists(this.state.query)
    );
  }

  handleChange(e) {
    this.setState(
      { query: e.target.value },
      () => this.props.searchResults(this.state.query)
    );
  }

  render() {

    let artists;
    if (this.props.artists) {
      artists = this.props.artists.map(user => {
        return (
          <li className="search-item" key={artist.id}>
            <Link onClick={this.clearInput}
              to={`/artists/${artist.id}`}>
              <div className="search-name">
                {`${artist.name}`}
              </div>
            </Link>
          </li>
        );
      });
    }

    return (
      <div className="search-bar">
        <div className="search-results-container">
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.query}
          />
          <ul className="search-results">
            { artists }
          </ul>
        </div>
      </div>
    );
  }
}



export default SearchDropdown;
