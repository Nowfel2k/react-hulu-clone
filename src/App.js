import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Nav from "./Components/Nav";
import Results from "./Components/Results";
import requests from "./Helpers/requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header setSelectedOption={setSelectedOption} />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
