import React from "react";
import "./Footer.scss";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      {/* <div className="map">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div> */}
      <section className="footer-contacts"></section>
    </div>
  );
}
