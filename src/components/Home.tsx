import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Info from "./Info";
import Contact from "./Contact";

export default function Home({effect, setEffect, handleClick}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  const myRef = useRef(null);


  useEffect(() => {
    if (!effect) {
      setEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x655f5f,
          backgroundColor: 0xe1e3ef,
          points: 10.0,
          maxDistance: 14.0,
          spacing: 10.0,
        })
      );
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [effect]);




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
            <p
              onClick={() => {
                setActiveIndex(0);
                if (effect) {
                  effect.setOptions({
                    maxDistance: 18.0,
                  });
                }
              }}
              className="pageLinks"
            >
              Home
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setActiveIndex(1);
                if (effect) {
                  effect.setOptions({
                    maxDistance: 22.0,
                  });
                }
              }}
              className="pageLinks"
            >
              Projects
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setActiveIndex(2);
                if (effect) {
                  effect.setOptions({
                    maxDistance: 26.0,
                  });
                }
              }}
              className="pageLinks"
            >
              About
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                if (effect)
                  effect.setOptions({
                    maxDistance: 30.0,
                  });
                setActiveIndex(3);
              }}
              className="pageLinks"
            >
              Contact
            </p>
          </li>
        </ul>
      </div>
      {activeIndex === 0 && <Presentation handleClick={handleClick}/>}
      {activeIndex === 1 && <Projects  handleClick={handleClick}/>}
      {activeIndex === 2 && <Info  handleClick={handleClick} />}
      {activeIndex === 3 && <Contact  handleClick={handleClick} />}
    </div>
  );
}
