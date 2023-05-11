import React from 'react';
import styles from './Map.module.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = { height: '420px', width: '100%' };
const defaultCenter = { lat: 55.708212007801315, lng: 12.522981551714693 };
const defaultZoom = 17;
const poolPubLocation = { lat: 55.6783, lng: 12.5796 }; // Pool Pub coordinates

interface MapProps {
  googleMapsApiKey: string;
}

// ask about the marker 

export default function MapImage({ googleMapsApiKey }: MapProps) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionImage}>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={defaultZoom}
          >
            <Marker position={poolPubLocation} /> 
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
