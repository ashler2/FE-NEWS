import React from "react";
import gitHub from "../images/github.png";
import linkedIn from "../images/linkedIn.png";
const Footer = () => {
  return (
    <div className="Footer">
      <a href="https://github.com/ashler2">
        <img src={gitHub} />
      </a>
      <p>By: Ashley Readman-Thorley</p>
      <a href="https://www.linkedin.com/in/ashley-readman-thorley-baa0bb139/">
        <img src={linkedIn} />
      </a>
    </div>
  );
};

export default Footer;
