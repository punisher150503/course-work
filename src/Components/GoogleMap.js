import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMapComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBteyqjPBCkWcElIRQP5SAFUa5pj0bde2s"
  });

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* Add your map components here */}
      <Marker position={center} />

    </GoogleMap>
  ) : <div>Loading...</div>;
}

export default GoogleMapComponent;
