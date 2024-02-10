import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage"; // Ensure you have this component
import AboutPage from "./AboutPage"; // Ensure you have this component
import BlogList from "./BlogList"; // Ensure you have this component with updated grid layout
import Profile from "./Profile"; // Ensure you have this component
import ContactMe from "./ContactMe"; // Ensure you have this component
import HeroSection from "./HeroSection"; // Ensure you have created this new component
import "./App.css"; // Ensure your CSS is properly organized

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog List</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* HeroSection can be conditionally rendered based on the route, shown here for simplicity */}
        <HeroSection />
        <div className="content-area">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/contact" element={<ContactMe />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
          <aside>
            <Profile />
          </aside>
        </div>
      </div>
    </Router>
  );
};

export default App;
