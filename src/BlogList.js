// src/components/BlogList.js
import React from "react";
import "./BlogList.css"; // Make sure to create and import the CSS

const BlogList = ({ posts }) => {
  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img src={post.image} alt={post.title} />
          <div className="post-content">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
