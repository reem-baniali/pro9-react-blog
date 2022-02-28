import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import Create from "./components/cratePost/Create";
import Blog from "./components/blogs/Blog";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          {/* <Nav /> */}

          <Routes>
            <Route path="/" element={<Home />} forceRefresh={true} />
            {/* <Route path="/About" element={<About />} /> */}
            <Route path="/Details" element={<Details />} />
            <Route
              path="/Create"
              element={<Create posts={posts} setPosts={setPosts} />}
            />
            <Route
              path="/Blog"
              element={<Blog posts={posts} setPosts={setPosts} />}
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
