import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Theme from "./components/Theme";
import { useMyContext } from "./components/MyContext";

function App() {
 const {darkModeStyle} = useMyContext()

  
  return (
    <>
      <div className="page" style={darkModeStyle}>
        <Theme   />
        <Home
          
        />
      </div>
    </>
  );
}

export default App;
