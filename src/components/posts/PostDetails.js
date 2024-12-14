import React from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const PostDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  let {
    data: post,
    setData: setPost,
    isloading,
    errMsg,
  } = useFetch(`http://localhost:4000/posts/${id}`);
  const handelDelete = () => {
    fetch(`http://localhost:4000/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      {isloading && <div>Loaddinn..</div>}
      {errMsg && <div className="error">{errMsg}</div>}
      {post && !isloading && !errMsg && (
        <article className="container post-details">
          <div className="post-details-title">
            <h1>{post.title}</h1>
            <button className="btn btn-danger" onClick={handelDelete}>
              Delete
            </button>
          </div>

          <img src={post.image} alt="" className="post-details-img"></img>

          <div className="post-author">
            By: {post.author ? post.author : "Error"}
          </div>

          <p className="post-details-body">{post.body}</p>
        </article>
      )}
    </>
  );
};

export default PostDetails;
