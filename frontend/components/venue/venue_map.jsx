import React from "react";

class VenueMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.venue.latitude !== this.props.venue.latitude ||
      nextProps.venue.longitude !== this.props.venue.longitude
    ) {
      this.map.setCenter({
        lat: parseFloat(nextProps.venue.latitude),
        lng: parseFloat(nextProps.venue.longitude)
      });

      this.setState(
        {
          lat: nextProps.venue.latitude,
          lng: nextProps.venue.longitude
        },
        () => {
          new google.maps.Marker({
            position: this.state,
            animation: google.maps.Animation.DROP,
            map: this.map
          });
        }
      );
    }
  }

  componentDidMount() {
    const mapOptions = {
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return <div id="venue-map" ref={map => (this.mapNode = map)} />;
  }
}

export default VenueMap;
