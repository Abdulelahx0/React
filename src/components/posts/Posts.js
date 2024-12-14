import React from "react";
import useFetch from "./useFetch";
import Post from "./Post";

const Posts = () => {
  let {
    data: posts,
    setData: setPost,
    isloading,
    errMsg,
  } = useFetch("http://localhost:4000/posts");

 
  return (
    <section className="posts">
      {posts &&
        posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      {isloading && <div> Loading ..</div>}
      {!posts && !isloading && !errMsg && (
        <div className="not-found">no posts</div>
      )}
      {errMsg && <div className="error">{errMsg}</div>}
    </section>
  );
};
export default Posts;
