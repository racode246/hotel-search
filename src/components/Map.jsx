import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

// InnerMap Component
const InnerMap = withGoogleMap(({ location, marker }) => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={location}
    center={location}
  >
    <Marker position={marker} />
  </GoogleMap>
));

// Map Component
const Map = ({ location }) => (
  <InnerMap
    containerElement={<div />}
    mapElement={<div className="map" />}
    location={location}
    marker={location}
  />
);

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Map;
