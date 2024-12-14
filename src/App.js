import React from "react";
import "./App.css";
import index from "./index.js";
import Header from "./components/Header";
import Home from "./components/Home";
import Fotter from "./components/Fotter";
import Error from "./components/Error";
import PostDetails from "./components/posts/PostDetails";
import CreatePost from "./components/posts/CreatePost";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Fotter />
      </div>
    </>
  );
}

export default App;
