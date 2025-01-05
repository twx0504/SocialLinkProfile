import React from "react";
import "./App.css";
import { links, profileInfo } from "./profileData";
import profilePicture from "./assets/images/chill-guy.jpg";

export default function App() {
  return (
    <div className="card">
      <div className="profile-section">
        <div className="profile-image-holder">
          <img src={profilePicture} alt="A profile picture of Jessica" />
          {/* This h1 is going to be hidden with overflow hidden */}
          {/* <h1>Jessica</h1> */}
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{profileInfo.name}</h2>
          <h3 className="profile-address">{profileInfo.addr}</h3>
        </div>
        <p className="profile-description">"{profileInfo.desc}"</p>
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
