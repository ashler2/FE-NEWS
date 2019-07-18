import React from "react";
import gitHub from "../images/github.png";
import linkedIn from "../images/linkedIn.png";
const Footer = () => {
  return (
    <div className="Footer">
      <a
        rel="noopener noreferrer"
        href="https://github.com/ashler2"
        target="_blank"
      >
        <img src={gitHub} alt="link to Github" />
      </a>
      <p>By: Ashley Readman-Thorley</p>
      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/ashley-readman-thorley-baa0bb139/"
        target="_blank"
      >
        <img src={linkedIn} alt="Link to linkedIn" />
      </a>
    </div>
  );
};

export default Footer;
