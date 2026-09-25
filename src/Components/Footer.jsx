/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    email,
    linkedIn,
    name,
    primaryColor,
    phone,
    address,
    website,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw"
      }}
    >
      <div className="footerMain">
        <div className="contactIntro">
          <p className="eyebrow">Available for opportunities</p>
          <h2>Let's build something useful.</h2>
          <p>{address}</p>
        </div>
        <div className="technologyStrip" aria-label="Cloud and software technologies">
          <div className="technologyItem">
            <img src="https://cdn.simpleicons.org/amazonaws" alt="AWS Cloud" />
            <span>AWS Cloud</span>
          </div>
          <div className="technologyItem">
            <img src="https://cdn.simpleicons.org/azuredevops" alt="Azure DevOps" />
            <span>Azure DevOps</span>
          </div>
          <div className="technologyItem">
            <img src="https://cdn.simpleicons.org/docker" alt="Docker" />
            <span>Docker</span>
          </div>
          <div className="technologyItem">
            <img src="https://cdn.simpleicons.org/googlecloud" alt="Cloud architecture" />
            <span>Cloud architecture</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {email && <a href={`mailto:${email}`}>Email</a>}
        {phone && <a href={`tel:${phone}`}>Phone</a>}
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        )}
        {website && <a href={website} target="_blank" rel="noopener noreferrer">Website</a>}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        {name} / Software engineering student / Dhaka
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  address: PropTypes.string,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,

};

export default Footer;
