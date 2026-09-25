/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../Image/Vibe.jpeg";

const imageAltText = "A selected project image from Hafizur Rahman Provat's portfolio";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="heroContent">
        <p className="eyebrow">Software engineering / Dhaka</p>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="heroIntro">
          Building practical software with Java, Python, JavaScript, and cloud technologies.
        </p>
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
