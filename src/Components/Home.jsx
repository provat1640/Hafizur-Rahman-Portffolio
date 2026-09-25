/**
 * Home component
 *
 * The section at the top of the page that introduces the portfolio owner.
 */

import React from "react";
import PropTypes from "prop-types";
import heroImage from "../Image/Vibe.jpeg";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <div className="heroLayout">
        <div className="heroContent">
          <p className="eyebrow">Software engineering / Dhaka</p>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p className="heroIntro">
            Building practical software with Java, Python, JavaScript, and cloud technologies.
          </p>
        </div>
        <div className="heroImageLayer" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
      </div>
      <a className="scrollHint" href="#about" aria-label="Scroll to About section">Scroll to explore</a>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
