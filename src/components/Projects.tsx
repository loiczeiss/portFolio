import React from "react";
import { useEffect } from "react";
import { useMyContext } from "./MyContext";

function Projects() {
  const {
    isCheckedDark,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    hoverColor,
  } = useMyContext();

  useEffect(() => {
    if (isCheckedDark) {
      handleClick(true);
    }
  }, [isCheckedDark]);

  return (
    <div className="content">
      <div className="projectDiv">
        <ul>
          <li className="project">■ Projects</li>
        </ul>
        <a
          className="Projects"
          href="https://loiczeiss.github.io/RetroPokedex/"
        >
          <div className="project_title">RetroPokedex</div>
          <div className="project_info">2023/Reactjs/Tailwindcss/GraphQL</div>
        </a>
        <a
          className="Projects"
          href="https://loiczeiss.github.io/shortUrl/"
        >
          <div className="project_title">URL Shortener</div>
          <div className="project_info">2024/Reactjs/Tailwindcss/RestAPI</div>
        </a><a
          className="Projects"
          href="https://loiczeiss.github.io/ipAddress/"
        >
          <div className="project_title">IP Adress</div>
          <div className="project_info">2024/Reactjs/Leaflet/Context.js</div>
        </a>
        <a
          className="Projects"
          href="https://loiczeiss.github.io/restCountries/"
        >
          <div className="project_title">REST Countries</div>
          <div className="project_info">2024/Reactjs/Tailwindcss/Redux/Node</div>
        </a>
        <a className="Projects" href="https://loiczeiss.github.io/weatherapp/">
          <div className="project_title">Weather App but a cool one...</div>
          <div className="project_info">
            2022/Reactjs/Tailwindcss/Axios/RestAPI
          </div>
        </a>
        <a
          className="Projects"
          href="https://loiczeiss.github.io/AgeCalculator/"
        >
          <div className="project_title">Age Calculator</div>
          <div className="project_info">2023/Reactjs/Tailwindcss</div>
        </a>
        <a className="Projects" href="https://loiczeiss.github.io/HangManGoT/">
          <div className="project_title">GoT HangMan</div>
          <div className="project_info">2022/Reactjs/PureCss</div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
