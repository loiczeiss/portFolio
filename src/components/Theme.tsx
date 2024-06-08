import { useMyContext } from "./MyContext";
import { useEffect } from "react";
function Theme() {
  const {
    isCheckedLight,
    setIsCheckedLight,
    isCheckedDark,
    setIsCheckedDark,
    handleClick,
    inputChange,
    setInputChange,
    lightInputChange,
    setLightInputChange,
  } = useMyContext();

  useEffect(() => {
    console.log(isCheckedDark);
  }, [isCheckedDark]);

  return (
    <div className="theme">
      <div
        onClick={() => {
          handleClick(true);
          setInputChange({
            border: "1px white solid",
            backgroundColor: "white",
          });
          setIsCheckedLight(false);

          console.log(isCheckedDark);
          setLightInputChange({ border: "1px white solid" });
        }}
      >
        <input
          style={inputChange}
          checked={isCheckedDark}
          type="checkbox"
          name=""
          id=""
        />
        <p>Dark</p>
      </div>
      <div
        onClick={() => {
          handleClick(false);
          setIsCheckedLight(true);
          setIsCheckedDark(false);
          setInputChange({});
          setLightInputChange({});
        }}
      >
        <input
          style={lightInputChange}
          checked={isCheckedLight}
          type="checkbox"
          name=""
          id=""
        />
        <p>Light</p>
      </div>
    </div>
  );
}

export default Theme;
