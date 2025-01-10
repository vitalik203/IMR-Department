import React from "react";
import "./Footer.scss";
import Map from "./Map";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="map">
        <Map />
      </div>
      <section className="footer-contacts"></section>
    </div>
  );
}
