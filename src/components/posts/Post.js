import React from "react";
import { Link } from "react-router";
const post = ({ post, handleDelete }) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      <img src={post.image} alt=""></img>
      <div className="post-author">
        By: {post.author ? post.author : "Error"}
      </div>
      <h3>{post.title}</h3>
    </Link>
  );
};

export default post;
