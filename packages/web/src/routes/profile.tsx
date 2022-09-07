import React from "react";
import NavBar from "../components/navbar";

import './profile.css'

export default function Profile() {

  

  return (
    <main style={{ padding: "1rem 0" }}>
      <NavBar />
      <div className="profile-container">
        <div className="profile-item">
          <h2>Profile Info</h2>
          <label htmlFor="profile-name">Name: </label>
          <input type="text" name="profile-name" />
        </div>

        <div className="profile-item">
          <label htmlFor="profile-age">Age: </label>
          <input type="text" name="profile-age" />
        </div>

        <div className="profile-item">
          <label htmlFor="profile-height">Height: </label>
          <input type="text" name="profile-height" />
        </div>

        <div className="profile-item">
          <label htmlFor="profile-weight">Weight: </label>
          <input type="text" name="profile-weight" />
        </div>

        <div className="profile-item">
          <label htmlFor="profile-calories/day">Calories/Day: </label>
          <input type="text" name="profile-calories/day" />
        </div>

        <div className="profile-item">
          <label htmlFor="profile-allergies">Allergies: </label>
          <select name="profile-allergies"> 
            <option value="na">N/A</option>
            <option value="peanuts">Peanuts</option>
          </select>
        </div>

        <div className="profile-item">
          <label htmlFor="profile-dr">Dietary Restrictions: </label>
          <select name="profile-dr"> 
            <option value="na">N/A</option>
            <option value="dairy-free">Dairy Free</option>
          </select>
        </div>

        <div className="profile-item">
          <button>Save</button>
        </div>

      </div>
    </main>
  );
}