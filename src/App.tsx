import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchComponent from "./components/FetchComponent";
import FetchArticle from "./components/FetchArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<FetchComponent />} />

            <Route path="/:article" element={<FetchArticle />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}
export default App;
