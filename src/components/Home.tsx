import "../App.css";
import { useEffect } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Info from "./Info";
import Contact from "./Contact";
import { useMyContext } from "./MyContext";
export default function Home() {
  const {
    vantaEffect,
    setVantaEffect,
    myRef,
    activeIndex,
    setActiveIndex,
    isCheckedDark,
    handleClick,
  } = useMyContext();

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
          color: 0x655f5f,
          backgroundColor: 0xe1e3ef,
          points: 8.0,
          maxDistance: 14.0,
          spacing: 10.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const border = document.getElementById("frame");
    if (isCheckedDark) {
      border.style.border = "1px white solid";
    } else {
      border.style.border = "1px black solid";
    }
  }, [isCheckedDark]);

  return (
    <div className="frame" id="frame">
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
                if (vantaEffect) {
                  vantaEffect.setOptions({
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
                if (vantaEffect) {
                  vantaEffect.setOptions({
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
                if (vantaEffect) {
                  vantaEffect.setOptions({
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
                if (vantaEffect)
                  vantaEffect.setOptions({
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
      {activeIndex === 0 && <Presentation />}
      {activeIndex === 1 && <Projects />}
      {activeIndex === 2 && <Info />}
      {activeIndex === 3 && <Contact />}
    </div>
  );
}
