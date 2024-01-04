import { useState } from "react";

function Info() {
  const [SVGstyle, setSVGstyle] = useState({});
  return (
    <div className="info">
      <a
        onMouseEnter={() => {
          setSVGstyle({ fill: "rgb(194, 192, 189)" });
        }}
        onMouseLeave={() => {
          setSVGstyle({});
        }}
        className="infoLink"
        href="https://github.com/loiczeiss"
      >
        <div className="infoLink_div">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="github"
            width={24}
            style={SVGstyle}
          >
            <path d="M12 .14c-6.617 0-12 5.383-12 12 0 5.576 3.95 10.5 9.392 11.708A.5.5 0 0 0 10 23.36v-2.72a.5.5 0 0 0-.5-.5h-1c-1.248 0-2.097-1.183-2.847-2.226-.077-.107-.153-.214-.23-.318.355.188.66.415.961.638.599.444 1.219.903 2.043.903h.01c.064.007.648.067 1.1-.33.212-.187.463-.54.463-1.167v-.349a.499.499 0 0 0-.364-.481C6.863 16.025 5 13.947 5 11.64c0-1.2.493-2.345 1.425-3.312a.5.5 0 0 0 .094-.558c-.372-.802-.293-1.893.148-2.548.584.227 1.341.704 1.833 1.288a.5.5 0 0 0 .554.147 8.67 8.67 0 0 1 5.893 0 .5.5 0 0 0 .554-.147c.492-.584 1.249-1.061 1.832-1.289.442.655.521 1.747.148 2.549a.5.5 0 0 0 .094.558C18.507 9.295 19 10.44 19 11.64c0 2.422-2.07 4.591-5.033 5.274a.5.5 0 0 0-.329.72c.247.47.362 1.107.362 2.006v3.72a.5.5 0 0 0 .608.488C20.05 22.64 24 17.716 24 12.14c0-6.617-5.383-12-12-12z"></path>
          </svg>
          <p style={{ marginLeft: "10px",marginTop :'0px', marginBottom: '0px' }}>GitHub</p>
        </div>
      </a>
      <a className="infoLink" href="https://www.linkedin.com/in/loiczeiss/">
        <div className="infoLink_div">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
            id="linkedin"
          >
            <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path>
          </svg>{" "}
          <p style={{ marginLeft: "10px",marginTop :'0px', marginBottom: '0px' }}>LinkedIn</p>
        </div>
      </a>
    </div>
  );
}

export default Info;
