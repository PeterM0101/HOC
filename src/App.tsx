import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Posts from "./components/Posts";
import Header from "./components/Header";
import AuthContextProvider from "./store/AuthContextProvider";

function App() {

  return (
    <AuthContextProvider>
        <Header />
      <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/posts' element={<Posts title='Posts'/>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
