import React from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login/*" element={<Login/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
