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

  const workAreas = [
    {
      label: "AWS Cloud",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      label: "Azure DevOps",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      label: "Docker",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      label: "Cloud architecture",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      label: "Android",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
    {
      label: "Open source",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      label: "Developer tools",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      label: "MCP protocol",
      image: "https://cdn.simpleicons.org/modelcontextprotocol/ffffff",
    },
  ];

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
      <div className="contactIntro">
        <p className="eyebrow">Available for opportunities</p>
        <h2>Let's build something useful.</h2>
        <p>{address}</p>
      </div>
      <div className="workAreas" aria-label="Technologies and areas of work">
        {workAreas.map((area) => (
          <div className="workArea" key={area.label}>
            <img src={area.image} alt="" />
            <span>{area.label}</span>
          </div>
        ))}
      </div>
      <div className="contactLinks" aria-label="Contact details">
        {email && <a href={`mailto:${email}`}>{email}</a>}
        {phone && <a href={`tel:${phone}`}>{phone}</a>}
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        )}
        {website && <a href={website} target="_blank" rel="noopener noreferrer">Portfolio</a>}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        {name} / Software engineering student / {address}
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
