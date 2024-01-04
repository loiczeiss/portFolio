import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Info from "./Info";
import Contact from "./Contact";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const [vantaChange, setVantaChange] = useState('points: 10.0')
const [vantaColor, setVantaColor] = useState(' 0x000')
  useEffect(() => {
    // Create a function to initialize the Vanta effect
    const initVantaEffect = () => {
      setVantaEffect(NET({
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
    vantaChange,
    maxDistance: 14.0,
    spacing: 10.0,
      }));
    };

    // Initialize the Vanta effect when the component mounts
    initVantaEffect();

    // Cleanup function to destroy the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    // Check if vantaEffect is already set and if the vantaChange settings have changed
    if (vantaEffect && myRef.current && (vantaChange || vantaColor)) {
      // Destroy the existing Vanta effect
      vantaEffect.destroy();
  
      // Create a new Vanta effect with the updated settings
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: vantaColor , // Parse the color string to an integer
        backgroundColor: 0xe1e3ef,
       vantaChange, // Spread the vantaChange object
        maxDistance: 14.0,
        spacing: 10.0,
      }));
    }
  }, [vantaChange, vantaColor]); // Run this effect whenever vantaChang

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
              setActiveIndex(0);setVantaChange('points: 10.0'); setVantaColor('0x000')
              
            }}
            className="pageLinks">Home</p>
          </li>
          <li>
            <p
              onClick={() => {
                setActiveIndex(1);setVantaChange('points: 20.0,color: 0x631b34')
              }}
              className="pageLinks"
            >
              Projects
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setActiveIndex(2);setVantaChange('points: 20.0,color: 0xfff'), console.log(vantaColor)
              }}
              className="pageLinks"
            >
              About
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setActiveIndex(3);setVantaChange('points: 30.0')
              }}
              className="pageLinks"
            >
              Contact
            </p>
          </li>
        </ul>
      </div>
      {activeIndex === 0 && <Presentation />}
      {activeIndex === 1 && <Projects />}
      {activeIndex === 2 && <Info />}
      {activeIndex === 3 && <Contact />}
    </div>
  );
}
