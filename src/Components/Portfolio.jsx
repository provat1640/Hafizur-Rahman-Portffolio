/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import vibeImage from "../Image/Vibe.jpeg";
import hotelImage from "../Image/Hotel-motel.jpeg";
import nightImage from "../Image/night1.jpeg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Colorant and color mixing software",
    description:
      "Product development work for Berger Paints, inspecting the software process from price details through color grading and dispensing.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding portfolioSection" id="portfolio">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>From coursework to useful software.</h2>
        </div>
        <p>Visual studies from my work and learning journey.</p>
      </div>
      <div className="projectFeature">
        <div className="projectCopy">
          <p className="projectNumber">01 / Product development</p>
          <h3>{projectList[0].title}</h3>
          <p>{projectList[0].description}</p>
          <p className="projectMeta">Berger Paints / April 2024</p>
        </div>
        <img src={vibeImage} alt="Project visual for colorant and color mixing software" />
      </div>
      <div className="imageGallery" aria-label="Selected portfolio imagery">
        <figure>
          <img src={hotelImage} alt="Selected portfolio visual titled Hotel-motel" />
          <figcaption>Selected work / 02</figcaption>
        </figure>
        <figure>
          <img src={nightImage} alt="Selected portfolio visual titled night1" />
          <figcaption>Selected work / 03</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Portfolio;
