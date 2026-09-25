/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "1.75rem",
        background: "rgba(250, 248, 243, 0.88)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">01 / Home</a>
      <a href="#about">02 / Profile</a>
      <a href="#portfolio">03 / Work</a>
      <a href="#footer">04 / Contact</a>
    </div>
  );
};

export default Header;
