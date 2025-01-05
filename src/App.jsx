import React, { useState } from "react";
import "./App.css";
import profilePicture from "./assets/images/chill-guy.jpg";

export default function App() {
  const [profile] = useState({
    name: "Too Wei Xin",
    addr: "Johor, Malaysia",
    desc: "A passionate junior frontend developer.",
  });
  // Link Data Management
  const [links] = useState([
    { platform: "GitHub", link: "https://github.com/twx0504" },
    {
      platform: "Frontend Mentor",
      link: "https://www.frontendmentor.io/profile/twx0504",
    },
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/weixintoo/" },
    { platform: "Twitter", link: "https://x.com/tuaku0504" },
    { platform: "Instagram", link: "https://www.instagram.com/twx0504/" },
  ]);

  return (
    <div className="card">
      <div className="profile-section">
        <div className="profile-image-holder">
          <img src={profilePicture} alt="A profile picture of Jessica" />
          {/* This h1 is going to be hidden with overflow hidden */}
          {/* <h1>Jessica</h1> */}
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{profile.name}</h2>
          <h3 className="profile-address">{profile.addr}</h3>
        </div>
        <p className="profile-description">
          "{profile.desc}"
        </p>
      </div>
      <ul className="link-section">
        {links.map((it, idx) => {
          return (
            <li className="link-item" key={idx}>
              <a className="profile-link" href={it.link} target="_blank">
                {it.platform}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
