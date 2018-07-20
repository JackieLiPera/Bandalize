import React from 'react';

class VenueMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 40.6782,
      lng: -73.9442
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.venue.latitude !== this.props.venue.latitude
      || nextProps.venue.longitude !== this.props.venue.longitude) {
        this.map.setCenter({lat: parseFloat(nextProps.venue.latitude), lng: parseFloat(nextProps.venue.longitude)});
      }
  };

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.state.lat , lng: this.state.long},
      zoom: 15
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  };



  render() {
    return (
      <div id='venue-map' ref={ map => this.mapNode = map }></div>
    )
  }


}

export default VenueMap;
