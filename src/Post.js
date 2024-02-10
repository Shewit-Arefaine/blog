// src/Post.js
import React from "react";

const Post = ({ title, content }) => (
  <article>
    <h2>{title}</h2>
    <p>{content}</p>
  </article>
);

export default Post;
