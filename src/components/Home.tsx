import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Info from "./Info";
import Contact from "./Contact";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000,
          backgroundColor: 0xe1e3ef,
          points: 10.0,
          maxDistance: 14.0,
          spacing: 10.0,
        })
      );
    }

  }, [vantaEffect]);
  return (
    <div className="frame">
      <div className="vanta-container" ref={myRef}></div>
      <div className="GenInfo">
        <header className="siteHeader">
          <h1>Loïc Zeiss</h1>
          <p className="subTitle">Front-End Developer</p>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* <Info/> */}
      
        {/* <Contact/> */}
        {/* <Projects /> */}
        <Presentation/>
      </div>
    
  );
}
