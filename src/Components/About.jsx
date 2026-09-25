/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Enthusiastic and dedicated Software Engineering student from Dhaka, eager to apply academic knowledge and practical skills in a dynamic software development internship.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "Software development",
  "Problem solving",
  "Version control (Git)",
  "MySQL",
  "PHP / Laravel",
  "DevOps",
  "System architecture",
  "Project architecture",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I bring a foundation in data structures, algorithms, software design, RESTful APIs, and unit testing, with a focus on practical problem solving and collaboration.";

const education = "B.Sc. in Software Engineering, Daffodil International University, Dhaka / Jun 2023 - Aug 2027";

const certifications = [
  "GitHub Copilot Fundamentals from Microsoft Learn / Sep 2026",
  "Introduction to Open Source / Present",
  "Microsoft Azure Products: AZ-900 and AZ-204",
  "Web Development with Python and JavaScript / Feb 2024",
  "Microsoft Excel for Data Analysis / 2026",
  "GitHub Copilot Foundation for DevOps, System Architecture and Project Architecture / 2026",
];

const achievements = [
  "Deployed a university web application to improve local business operations in Dhaka.",
  "Optimized academic codebases to reduce loading times by 30%.",
  "Led RESTful API integration for a campus event management system, improving engagement by 25%.",
  "Implemented JUnit and PyTest unit testing, reducing bugs by 40%.",
];

const About = () => {
  return (
    <section className="padding aboutSection" id="about">
      <div className="sectionIntro">
        <p className="eyebrow">Profile / capabilities</p>
        <h2>Curious by nature. Practical by design.</h2>
        <p className="large">{description}</p>
        <p>{detailOrQuote}</p>
      </div>
      <div className="skillsPanel">
        <p className="eyebrow">Technical toolkit</p>
        <ul className="skillsList">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="resumeDetails">
        <div>
          <p className="eyebrow">Education</p>
          <p>{education}</p>
        </div>
        <div>
          <p className="eyebrow">Certifications</p>
          <ul>
            {certifications.map((certificate) => <li key={certificate}>{certificate}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Achievements</p>
          <ul>
            {achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
