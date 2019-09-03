import React from "react";
import "../styles/homePage.css";



export default function HomePage() {
  return (
    <div>
      <header id="showcase" class="grid">
        <div class="bg-img"></div>
        <div class="content-wrap">
          <h1>Welcome To Productivity Tracker</h1>
          <a href="/login" class="btn">
            Sign In
          </a>
        </div>
    
  </header>
      <main id="main">

        <section id="section-b" class="grid">
          <ul>
            <li>
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/1927502/pexels-photo-1927502.jpeg"
                  alt=""
                ></img>
                <div class="card-content">
                  <h3 class="card-title">Keep Track Of What You Do</h3>
                  <p>
                    Productivity Tracker is a tool that helps you keep track of activities
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg"
                  alt=""
                ></img>
                <div class="card-content">
                  <h3 class="card-title">Sort Your Activities</h3>
                  <p>
                    View your saved activities by a date range to see how much time you spent on each activity  
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg"
                  alt=""
                ></img>
                <div class="card-content">
                  <h3 class="card-title">Make A Better Use Of Your Time</h3>
                  <p>
                    If you could see that you spent 100 hours watching TV shows, wouldn't you want to make change?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>

    </div>
  );
}
