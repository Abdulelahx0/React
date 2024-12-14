import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
const CreatePost = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("admin");

  const handleFrom = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      body,
      image: url,
      author,
    };
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      // console.log("post added");
      navigate("/");
    });
  };
  return (
    <section className="create-post">
      <h2>Add New Post</h2>
      <form onSubmit={handleFrom}>
        <label> title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label> Image Url :</label>
        <input
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <label> body :</label>
        <textarea
          required
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label> author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Abdulelah">Abdulelah</option>
          <option value="Majeed">Majeed</option>
        </select>
        <button className="btn" type="submit">
          Add Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
