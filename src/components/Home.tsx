import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NET from 'vanta/dist/vanta.net.min'
export default function Home() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xdbb8b8,
          backgroundColor: 0x837a9a,
          points: 10.00,
          maxDistance: 14.00,
          spacing: 10.00
        }))
      }
    
    }, [vantaEffect])
  return (
    <div className="frame" ref={myRef}>
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
      <div className="presentationText"><p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae maiores cum repellendus magni incidunt sunt assumenda ullam, atque corporis debitis nostrum maxime distinctio perferendis eaque at! Explicabo, non quia.</p></div>

    </div>
  );
}
