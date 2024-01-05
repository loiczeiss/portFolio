import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Theme from "./components/Theme";

function App() {
  const [darkModeStyle, setDarkModeStyle] = useState<object>({});
  const [vantaEffect, setVantaEffect] = useState<null | any>(null);
  const handleClick = () => {
    vantaEffect.setOptions({ backgroundColor: 0x000000 });
    setDarkModeStyle({ backgroundColor: "black", color: "white" });
    const allLinks = document.querySelectorAll("a");
    allLinks.forEach((link) => {
      link.style.color = "white"; // Set the color to your desired value
    });
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach((paragraph) => {
      paragraph.style.color = "white"; // Set the color to your desired value
    });
    
  };
  return (
    <>
      <div className="page" style={darkModeStyle}>
        <Theme handleClick={handleClick} />
        <Home effect={vantaEffect} setEffect={setVantaEffect} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
