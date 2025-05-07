import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
            <a href="https://github.com/ZadeAbhishek" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arzade/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:zadea@tcd.ie" aria-label="Email"> <EmailIcon /></a>
      </div>
    </footer>
  );
}

export default Footer;