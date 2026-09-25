/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Hafizur Rahman Provat",
  title: "Software Engineering Student",
  email: "vatpro8@gmail.com",
  phone: "01763676326",
  address: "Ashulia, Savar, 1341 Dhaka",
  website: "https://neo-crisp-4dca81.netlify.app",
  linkedIn: "https://linkedin.com/in/hafizur-rahman-0a404221a",
};

const primaryColor = "#173f5f";
const secondaryColor = "#f6c85f";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
