import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // додано імпорт для Marker і Popup
import "leaflet/dist/leaflet.css"; // додано стиль для Leaflet

export default function Map() {
  return (
    <MapContainer
      center={[49.8380948, 24.0329169]}
      zoom={16.5}
      scrollWheelZoom={false}
      style={{ height: "100%", maxWidth: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.8380948, 24.0329169]}>
        <Popup>
          <a href="https://maps.app.goo.gl/3XTqQGKUV1JVibk98" target="_blank">
            https://maps.app.goo.gl/3XTqQGKUV1JVibk98
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
