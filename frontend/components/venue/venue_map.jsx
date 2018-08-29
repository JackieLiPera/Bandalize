import React from 'react';

class VenueMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: parseFloat(this.props.venue.latitude),
      lng: parseFloat(this.props.venue.longitude)
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
      center: { lat: this.state.lat , lng: this.state.lng},
      zoom: 15
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    const marker = new google.maps.Marker({
      position: { lat: this.state.lat, lng: this.state.lng },
      map: this.map,
      title: 'Hello World!'
    });
  };



  render() {
    return (
      <div id='venue-map' ref={ map => this.mapNode = map }></div>
    )
  }


}

export default VenueMap;
