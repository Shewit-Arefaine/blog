import React from "react";
import "./HomePage.css"; // Make sure to create and import a corresponding CSS file

const HomePage = () => (
  <div className="home-page">
    <section className="intro-section">
      <h1>Welcome to My Software Engineering Blog</h1>
      <p>
        Dive into the world of software development. Discover articles,
        tutorials, and insights on the latest in technology, programming, and
        software design.
      </p>
    </section>
    <section className="featured-posts">
      <h2>Featured Posts</h2>
      {/* Example of how you might structure a featured post; in reality, you'd likely map over data */}
      <div className="post">
        <h3>Understanding React's useEffect Hook</h3>
        <p>
          A deep dive into how useEffect works and how to use it effectively in
          your projects.
        </p>
      </div>
      <div className="post">
        <h3>Demystifying Async/Await in JavaScript</h3>
        <p>
          Learn how async/await works behind the scenes and tips for using it to
          write cleaner asynchronous code.
        </p>
      </div>
    </section>
  </div>
);

export default HomePage;
