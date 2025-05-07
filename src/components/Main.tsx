import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/profile-img.png';
import EmailIcon from '@mui/icons-material/Email';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ZadeAbhishek" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arzade/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:zadea@tcd.ie" aria-label="Email"> <EmailIcon /></a>
          </div>
          <h1>Abhishek Zade</h1>
          <p className="tagline">
  Ex‑SDE&nbsp;at&nbsp;Jio&nbsp;Platforms&nbsp;Limited<br />
  GSoC&nbsp;Contributor&nbsp;at&nbsp;CircuitVerse<br />
  MSc&nbsp;Computer&nbsp;Science&nbsp;(Intelligent&nbsp;Systems), Trinity&nbsp;College&nbsp;Dublin<br />
  BE&nbsp;IT, Honours Data Science,&nbsp;Savitribai&nbsp;Phule&nbsp;Pune&nbsp;University
</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ZadeAbhishek" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arzade/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:zadea@tcd.ie" aria-label="Email"> <EmailIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;