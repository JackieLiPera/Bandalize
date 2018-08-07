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
      () => this.props.getSearchResults(this.state.query),
    );
  }

  handleChange(e) {
    this.setState(
      { query: e.target.value },
      () => this.props.getSearchResults(this.state.query)
    );
  }



  render() {

    let results;
    if (this.props.results) {
      results = this.props.results.map(result => {
        let image;
        if (result.image) {
          image = <img className="result-image" src={result.image}></img>
        }

        return (
          <li className="search-item" key={result.id}>
            { image }
            <Link onClick={this.clearInput}
              to={`/artists/${result.id}`}>
              <div className="search-name">
                {`${result.name}`}
              </div>
            </Link>
          </li>
        );
      });
    } else {
      return null;
    }


    return (
      <div className="search-results-container">
        <i className="fas fa-search"></i>
        <input
          className="search-bar"
          onChange={this.handleChange}
          type="text"
          value={this.state.query}
          placeholder="Search for artists and venues"
        />
        <ul className="search-results">
          { results }
        </ul>
      </div>
    );
  }
}



export default SearchDropdown;
